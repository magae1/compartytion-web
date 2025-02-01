"use client";

import { useActionState } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { IoPerson } from "react-icons/io5";

import BaseInput from "@/components/BaseInput";
import { signup } from "@/app/(auth)/_libs/actions";
import SubmitButton from "@/components/SubmitButton";

interface Props {
  email: string;
}

export default function SignupForm({ email }: Props) {
  const [state, formAction] = useActionState(signup, {
    value: {
      email: email,
      username: "",
      password: "",
      confirmedPassword: ""
    },
    code: 0
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
        autoComplete={"username"}
        defaultValue={state.value.email ?? undefined} />
      <BaseInput
        name="username"
        label="사용자명"
        placeholder="사용자명을 입력해주세요"
        icon={<IoPerson size={21} />}
        isError={isError}
        autoComplete={"off"}
        defaultValue={state.value.username ?? undefined}
      />
      <BaseInput
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        icon={<MdPassword size={21} />}
        type="password"
        message={state.message?.password}
        isError={isError}
        autoComplete={"new-password"}
        defaultValue={state.value.password ?? undefined} />
      <BaseInput
        name="comfirmedPassword"
        label="비밀번호(확인)"
        placeholder="비밀번호(확인)를 입력해주세요"
        icon={<MdPassword size={21} />}
        type="password"
        message={state.message?.password}
        isError={isError}
        autoComplete={"new-password"}
        defaultValue={state.value.password ?? undefined} />
      <SubmitButton
        mt={state.message?.confirmedPassword ? "mt-1" : "mt-4"}
        label={{ default: "회원가입하기", pending: "가입 중..." }} />
    </form>
  );
}