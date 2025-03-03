"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { MdPassword } from "react-icons/md";
import { toast } from "react-toastify";

import {
  changePassword,
  sendPasswordOtp,
  verifyPasswordOtp,
} from "@/app/(auth)/_libs/actions";
import SubmitButton from "@/components/SubmitButton";
import BaseInput from "@/components/BaseInput";
import OtpForm from "@/app/(auth)/_components/OtpForm";
import { ActionType } from "@/libs/type";
import { OtpVerificationForm } from "@/app/(auth)/_libs/type";
import AuthForm from "@/app/(auth)/_components/AuthForm";

interface Props {
  email: string;
}

export default function ChangePasswordForm({ email }: Props) {
  const router = useRouter();
  const [isOtpConfirmed, setOtpConfirmed] = useState(false);
  const [state, formAction] = useActionState(changePassword, {
    value: {
      newPassword: "",
      newConfirmedPassword: "",
    },
    code: 0,
  });

  const verifyPasswordOtpAction = async (
    otpVerifyAction: ActionType<OtpVerificationForm>,
    formData: FormData,
  ) => {
    return verifyPasswordOtp(otpVerifyAction, formData).then((r) => {
      if (r.code >= 200 && r.code < 300) {
        setOtpConfirmed(true);
      }
      return r;
    });
  };

  useEffect(() => {
    if (state.code >= 200 && state.code < 300) {
      toast.success(state.detail);
      router.push("/login");
    }
  }, [state]);

  const isError = 400 <= state.code && state.code < 500;

  return (
    <>
      <OtpForm
        email={email}
        verifyOtpAction={verifyPasswordOtpAction}
        sendOtpAction={sendPasswordOtp}
        showOtpSendButton={true}
      />
      {isOtpConfirmed && (
        <>
          <div className="divider"></div>
          <AuthForm action={formAction} legend="비밀번호 변경">
            <input name="email" readOnly hidden defaultValue={email} />
            <BaseInput
              name="newPassword"
              label="새 비밀번호"
              placeholder="새 비밀번호를 입력해주세요"
              icon={<MdPassword size={21} />}
              type="password"
              message={state.message?.newPassword}
              isError={state.message && state.message.newPassword && isError}
              autoComplete={"new-password"}
              defaultValue={state.value.newPassword ?? undefined}
            />
            <BaseInput
              name="newConfirmedPassword"
              label="새 비밀번호(확인)"
              placeholder="새 비밀번호(확인)를 입력해주세요"
              icon={<MdPassword size={21} />}
              type="password"
              message={state.message?.newConfirmedPassword}
              isError={
                state.message && state.message.newConfirmedPassword && isError
              }
              autoComplete={"new-password"}
              defaultValue={state.value.newConfirmedPassword ?? undefined}
            />
            <p className={`fieldset-label ${isError && "text-error"}`}>
              {state.detail}
            </p>
            <SubmitButton
              label={{ default: "변경하기", pending: "제출 중..." }}
            />
          </AuthForm>
        </>
      )}
    </>
  );
}
