"use client";

import { useActionState } from "react";
import { MdEmail, MdKey } from "react-icons/md";

import { verifyOtp } from "@/app/(auth)/_libs/actions";
import BaseInput from "@/components/BaseInput";
import SubmitButton from "@/components/SubmitButton";

interface Props {
  email: string;
}

export default function OtpForm({ email }: Props) {
  const [state, formAction] = useActionState(verifyOtp, {
    value: {
      email: email,
      otp: ""
    },
    code: 0,
    message: {
      otp: ["이메일로 전송된 OTP를 입력해주세요."]
    }
  });

  const isError = state.code >= 400 && state.code < 500;

  return (
    <form action={formAction} className="flex flex-col gap-y-1">
      <BaseInput
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        icon={<MdEmail size={21} />}
        message={state.message?.email}
        isError={isError}
        defaultValue={state.value.email ?? undefined} />
      <BaseInput
        name="otp"
        label="OTP"
        icon={<MdKey size={21} />}
        message={state.message?.otp}
        isError={isError}
        defaultValue={state.value.otp ?? undefined}
      />
      <SubmitButton mt={state.message?.otp ? "mt-1" : "mt-4"} />
    </form>
  );

}