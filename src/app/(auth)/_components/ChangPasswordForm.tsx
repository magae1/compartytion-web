"use client";

import { useActionState, useEffect, useState } from "react";
import { MdPassword } from "react-icons/md";

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
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

  const isError = state.code >= 400 || state.code < 500;

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
          <form action={formAction} className="flex flex-col gap-y-1">
            <input name="email" readOnly hidden defaultValue={email} />
            <BaseInput
              name="newPassword"
              label="새 비밀번호"
              placeholder="새 비밀번호를 입력해주세요"
              icon={<MdPassword size={21} />}
              type="password"
              message={state.message?.newPassword}
              isError={isError}
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
              isError={isError}
              autoComplete={"new-password"}
              defaultValue={state.value.newConfirmedPassword ?? undefined}
            />
            {state.detail && (
              <span
                className={`label-text-alt ${isError ? "text-error" : "text-success"}`}
              >
                {state.detail}
              </span>
            )}
            <SubmitButton
              label={{ default: "변경하기", pending: "제출 중..." }}
              mt={state.message?.newConfirmedPassword ? "mt-1" : "mt-4"}
            />
          </form>
        </>
      )}
    </>
  );
}
