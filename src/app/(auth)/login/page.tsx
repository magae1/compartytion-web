"use client";

import { FormEvent, RefObject, useEffect, useRef, useState } from "react";
import { MdEmail, MdError } from "react-icons/md";

import BaseInput from "@/components/BaseInput";
import SubmitButton from "@/components/SubmitButton";
import OtpForm from "@/app/(auth)/_components/OtpForm";
import LoginForm from "@/app/(auth)/_components/LoginForm";
import {
  checkEmailExistence,
  sendEmailOtp,
  verifyEmailOtp,
} from "@/app/(auth)/_libs/actions";
import { EmailForm } from "@/app/(auth)/_libs/type";
import AuthForm from "@/app/(auth)/_components/AuthForm";

export default function LoginPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const handleOtpSendRef = useRef<{ handleOtpSend: () => void } | null>(null);
  const [mode, setMode] = useState<"default" | "otp" | "login">("default");

  useEffect(() => {
    if (mode === "otp") {
      handleOtpSendRef.current?.handleOtpSend();
    }
  }, [mode]);

  if (mode === "otp") {
    return (
      <OtpForm
        email={emailInputRef.current?.value ?? ""}
        handleOtpSendRef={handleOtpSendRef}
        showOtpSendButton
        sendOtpAction={sendEmailOtp}
        verifyOtpAction={verifyEmailOtp}
      />
    );
  } else if (mode === "login") {
    return <LoginForm email={emailInputRef.current?.value ?? ""} />;
  }
  return (
    <JoinForm changeMode={(mode) => setMode(mode)} inputRef={emailInputRef} />
  );
}

interface JoinProps {
  inputRef: RefObject<HTMLInputElement | null>;
  changeMode: (mode: "default" | "otp" | "login") => void;
}

function JoinForm(props: JoinProps) {
  const { changeMode, inputRef } = props;
  const [isInternalError, setInternalError] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[] | undefined>(undefined);

  const isEmailForm = (o: any): o is EmailForm => {
    return o && typeof o.email === "string" && typeof o.exists === "boolean";
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    checkEmailExistence(inputRef.current?.value ?? "")
      .then((r) => {
        if (isEmailForm(r)) {
          changeMode(r.exists ? "login" : "otp");
        } else {
          setMessages(r.message?.email);
          setError(true);
        }
      })
      .catch(() => {
        setInternalError(true);
      });
  };

  return (
    <>
      {isInternalError && (
        <div role="alert" className="alert alert-error my-1">
          <MdError size={24} />
          <span>서비스를 이용할 수 없습니다.</span>
        </div>
      )}
      <AuthForm onSubmit={handleSubmit} legend="로그인">
        <BaseInput
          label="이메일"
          placeholder="이메일을 입력해주세요"
          icon={<MdEmail size={21} />}
          name="email"
          isError={messages && isError}
          message={messages}
          ref={inputRef}
        />
        <SubmitButton
          label={{
            default: "계속",
            pending: "진행 중...",
          }}
        />
      </AuthForm>
    </>
  );
}
