"use client";

import { useActionState } from "react";
import Link from "next/link";
import { MdEmail, MdPassword } from "react-icons/md";

import BaseInput from "@/components/BaseInput";
import { login } from "@/app/(auth)/_libs/actions";
import SubmitButton from "@/components/SubmitButton";

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

  const isError = state.code >= 400 || state.code < 500;

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
        defaultValue={state.value.email ?? undefined}
      />
      <BaseInput
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        icon={<MdPassword size={21} />}
        type="password"
        message={state.message?.password}
        isError={isError}
        autoComplete={"current-password"}
        defaultValue={state.value.password ?? undefined}
      />
      {state.detail && (
        <span className="label-text-alt text-error">{state.detail}</span>
      )}
      <SubmitButton
        mt={state.message?.password ? "mt-1" : "mt-4"}
        label={{ default: "로그인", pending: "로그인 중..." }}
      />
      <div>
        <Link
          href={`/change-password?email=${state.value.email}`}
          className="label-text hover:underline"
        >
          비밀번호를 잊어버리셨나요?
        </Link>
      </div>
    </form>
  );
}
