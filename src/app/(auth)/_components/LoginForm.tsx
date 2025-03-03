"use client";

import { useActionState } from "react";
import Link from "next/link";
import { MdEmail, MdPassword } from "react-icons/md";

import BaseInput from "@/components/BaseInput";
import { login } from "@/app/(auth)/_libs/actions";
import SubmitButton from "@/components/SubmitButton";
import AuthForm from "@/app/(auth)/_components/AuthForm";

interface Props {
  email?: string;
}

export default function LoginForm({ email = "" }: Props) {
  const [state, formAction] = useActionState(login, {
    value: {
      email: email,
      password: "",
    },
    code: 0,
  });

  const isError = 400 <= state.code && state.code < 500;

  return (
    <AuthForm action={formAction} legend="로그인">
      <BaseInput
        name="email"
        label="이메일"
        placeholder="이메일을 입력해주세요"
        icon={<MdEmail size={21} />}
        message={state.message?.email}
        isError={state.message && state.message.email && isError}
        autoComplete={"username"}
        defaultValue={state.value.email ?? undefined}
      />
      <BaseInput
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        icon={<MdPassword size={21} />}
        type="password"
        message={state.message?.password}
        isError={state.message && state.message.password && isError}
        autoComplete={"current-password"}
        defaultValue={state.value.password ?? undefined}
      />
      <p className="fieldset-label text-error">{state.detail}</p>
      <SubmitButton label={{ default: "로그인", pending: "로그인 중..." }} />
      <div>
        <Link
          href={`/change-password?email=${state.value.email}`}
          className="link link-hover"
        >
          비밀번호를 잊어버리셨나요?
        </Link>
      </div>
    </AuthForm>
  );
}
