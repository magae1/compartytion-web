"use server";

import { redirect } from "next/navigation";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

import { ActionType, ResType } from "@/libs/type";
import {
  ChangePasswordForm,
  EmailExistence,
  EmailForm,
  LoginForm,
  OtpVerificationForm,
  SignupForm,
} from "@/app/(auth)/_libs/type";
import { baseFetcher } from "@/libs/fetchers";
import { parseCookie } from "@/libs/parsers";
import { SESSION_COOKIE_NAME } from "@/libs/constants";

export async function checkEmailExistence(
  email: string,
): Promise<ActionType<EmailForm> | EmailExistence> {
  const emailForm = {
    email: email,
  };

  const res = await baseFetcher("/auth/email/existence", {
    method: "POST",
    body: JSON.stringify(emailForm),
  });

  if (!res.ok) {
    const data = (await res.json()) as ResType<EmailForm>;
    return {
      value: emailForm,
      ...data,
    };
  }

  return (await res.json()) as EmailExistence;
}

async function sendOtp(
  emailForm: EmailForm,
  subUrl: string,
): Promise<Response> {
  return await baseFetcher(subUrl, {
    method: "POST",
    body: JSON.stringify(emailForm),
  });
}

export async function sendEmailOtp(email: string): Promise<ResType<EmailForm>> {
  const emailForm = {
    email: email,
  };

  const res = await sendOtp(emailForm, "/auth/email/send-otp");

  if (!res.ok) {
    return {
      detail: "OTP 전송에 실패했습니다.",
      code: 400,
    };
  }

  return {
    detail: "OTP가 전송됐습니다.",
    code: 200,
  };
}

export async function sendPasswordOtp(
  email: string,
): Promise<ResType<EmailForm>> {
  const emailForm: EmailForm = {
    email: email,
  };
  const res = await sendOtp(emailForm, "/auth/password/send-otp");

  if (!res.ok) {
    return {
      detail: "OTP 전송에 실패했습니다.",
      code: 400,
    };
  }

  return {
    detail: "OTP가 전송됐습니다.",
    code: 200,
  };
}

export async function login(
  _: ActionType<LoginForm>,
  formData: FormData,
): Promise<ActionType<LoginForm>> {
  const formObj: LoginForm = {
    email: formData.get("email") as string | null,
    password: formData.get("password") as string | null,
  };

  const res = await baseFetcher("/auth/login", {
    method: "POST",
    body: JSON.stringify(formObj),
  });

  if (res.ok) {
    const resultCookies = res.headers.getSetCookie();
    const cookieStore = await cookies();

    resultCookies.forEach((s) => {
      const obj = parseCookie(s);
      if (obj[SESSION_COOKIE_NAME]) {
        cookieStore.set(SESSION_COOKIE_NAME, obj[SESSION_COOKIE_NAME], {
          path: "/",
          httpOnly: true,
        });
      }
    });
    revalidateTag("/accounts");
    redirect("/dashboard");
  }

  const data = (await res.json()) as ResType<LoginForm>;
  return {
    value: formObj,
    ...data,
  } as ActionType<LoginForm>;
}

export async function signup(
  _: ActionType<SignupForm>,
  formData: FormData,
): Promise<ActionType<SignupForm>> {
  const formObj: SignupForm = {
    email: formData.get("email") as string | null,
    username: formData.get("username") as string | null,
    password: formData.get("password") as string | null,
    confirmedPassword: formData.get("confirmedPassword") as string | null,
  };

  const res = await baseFetcher("/auth/signup", {
    method: "POST",
    body: JSON.stringify(formObj),
  });

  const data = (await res.json()) as ResType<SignupForm>;
  return {
    value: formObj,
    ...data,
  } as ActionType<SignupForm>;
}

async function verifyOtp(formObj: OtpVerificationForm, subUrl: string) {
  return await baseFetcher(subUrl, {
    method: "POST",
    body: JSON.stringify(formObj),
  });
}

export async function verifyEmailOtp(
  _: ActionType<OtpVerificationForm>,
  formData: FormData,
): Promise<ActionType<OtpVerificationForm>> {
  const formObj: OtpVerificationForm = {
    email: formData.get("email") as string | null,
    otp: formData.get("otp") as string | null,
  };

  const res = await verifyOtp(formObj, "/auth/email/verify-otp");

  if (res.ok) {
    redirect(`/signup?email=${formObj.email}`);
  }

  const data = (await res.json()) as ResType<OtpVerificationForm>;
  return {
    value: formObj,
    ...data,
  } as ActionType<OtpVerificationForm>;
}

export async function verifyPasswordOtp(
  _: ActionType<OtpVerificationForm>,
  formData: FormData,
): Promise<ActionType<OtpVerificationForm>> {
  const formObj: OtpVerificationForm = {
    email: formData.get("email") as string | null,
    otp: formData.get("otp") as string | null,
  };

  const res = await verifyOtp(formObj, "/auth/password/verify-otp");
  const data = (await res.json()) as ResType<OtpVerificationForm>;
  return {
    value: formObj,
    ...data,
  };
}

export async function changePassword(
  _: ActionType<ChangePasswordForm>,
  formData: FormData,
): Promise<ActionType<ChangePasswordForm>> {
  const email = formData.get("email") as string | null;
  const formObj: ChangePasswordForm = {
    newPassword: formData.get("newPassword") as string | null,
    newConfirmedPassword: formData.get("newConfirmedPassword") as string | null,
  };

  const res = await baseFetcher(`/auth/password/change?email=${email}`, {
    method: "POST",
    body: JSON.stringify(formObj),
  });

  const data = (await res.json()) as ResType<ChangePasswordForm>;
  return {
    value: formObj,
    ...data,
  };
}
