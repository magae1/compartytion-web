"use server";

import { redirect } from "next/navigation";

import { BASE_HEADERS, BASE_URL } from "@/constants";
import { ActionType, ResType } from "@/type";
import {
  EmailExistence,
  EmailForm,
  LoginForm,
  OtpVerificationForm,
  SignupForm
} from "@/app/(auth)/_libs/type";

export async function checkEmailExistence(email: string): Promise<ActionType<EmailForm> | EmailExistence> {
  const emailForm = {
    email: email
  };

  const res = await fetch(BASE_URL + "/auth/email/existence", {
    method: "POST",
    headers: BASE_HEADERS,
    body: JSON.stringify(emailForm)
  });

  if (!res.ok) {
    const data = await res.json() as ResType<EmailForm>;
    return {
      value: emailForm,
      ...data
    };
  }

  return await res.json() as EmailExistence;
}


export async function login(_: ActionType<LoginForm>, formData: FormData): Promise<ActionType<LoginForm>> {
  const formObj: LoginForm = {
    email: formData.get("email") as string | null,
    password: formData.get("password") as string | null
  };

  const res = await fetch(BASE_URL + "/auth/login", {
    method: "POST",
    headers: BASE_HEADERS,
    body: JSON.stringify(formObj)
  });

  if (res.ok) {
    redirect("/");
  }

  const data = await res.json() as ResType<LoginForm>;
  return {
    value: formObj,
    ...data
  } as ActionType<LoginForm>;
}

export async function signup(_: ActionType<SignupForm>, formData: FormData): Promise<ActionType<SignupForm>> {
  const formObj: SignupForm = {
    email: formData.get("email") as string | null,
    username: formData.get("username") as string | null,
    password: formData.get("password") as string | null,
    confirmedPassword: formData.get("confirmedPassword") as string | null
  };

  const res = await fetch(BASE_URL + "/auth/signup", {
    method: "POST",
    headers: BASE_HEADERS,
    body: JSON.stringify(formObj)
  });

  const data = await res.json() as ResType<SignupForm>;
  return {
    value: formObj,
    ...data
  } as ActionType<SignupForm>;
}

export async function verifyOtp(_: ActionType<OtpVerificationForm>, formData: FormData): Promise<ActionType<OtpVerificationForm>> {
  const formObj: OtpVerificationForm = {
    email: formData.get("email") as string | null,
    otp: formData.get("otp") as string | null
  };

  const res = await fetch(BASE_URL + "/auth/email/verify-otp", {
    method: "POST",
    headers: BASE_HEADERS,
    body: JSON.stringify(formObj)
  });

  if (res.ok) {
    redirect(`/signup?email=${formObj.email}`);
  }

  const data = await res.json() as ResType<OtpVerificationForm>;
  return {
    value: formObj,
    ...data
  } as ActionType<OtpVerificationForm>;
}