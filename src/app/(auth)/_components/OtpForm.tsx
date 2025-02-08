"use client";

import {
  RefObject,
  MouseEvent,
  useActionState,
  useCallback,
  useImperativeHandle,
} from "react";
import { toast } from "react-toastify";
import { MdEmail, MdKey } from "react-icons/md";

import BaseInput from "@/components/BaseInput";
import SubmitButton from "@/components/SubmitButton";
import { ActionType, ResType } from "@/libs/type";
import { EmailForm, OtpVerificationForm } from "@/app/(auth)/_libs/type";

interface Props {
  email?: string;
  verifyOtpAction: (
    prevState: ActionType<OtpVerificationForm>,
    formData: FormData,
  ) => Promise<ActionType<OtpVerificationForm>>;
  sendOtpAction: (email: string) => Promise<ResType<EmailForm>>;
  handleOtpSendRef?: RefObject<{ handleOtpSend: () => void } | null>;
  showOtpSendButton?: boolean;
}

export default function OtpForm({
  email = "",
  handleOtpSendRef,
  sendOtpAction,
  verifyOtpAction,
  showOtpSendButton = false,
}: Props) {
  const [state, formAction] = useActionState(verifyOtpAction, {
    value: {
      email: email,
      otp: "",
    },
    code: 0,
    message: {
      otp: ["이메일로 전송된 OTP를 입력해주세요."],
    },
  });

  const handleOtpSend = useCallback(() => {
    const toastDevId = toast.loading("OTP 전송 중...");
    sendOtpAction(email)
      .then((r) => {
        if (r.code >= 200 && r.code < 300) {
          toast.update(toastDevId, {
            render: r.detail,
            type: "success",
            isLoading: false,
            autoClose: 3000,
          });
        } else {
          toast.update(toastDevId, {
            render: r.detail,
            type: "warning",
            isLoading: false,
            autoClose: 3000,
          });
        }
      })
      .catch(() => {
        toast.update(toastDevId, {
          render: "오류가 발생했습니다.",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  }, []);

  const handleOnClickOtpSendButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleOtpSend();
  };

  useImperativeHandle(
    handleOtpSendRef,
    () => ({
      handleOtpSend,
    }),
    [],
  );

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
        tail={
          showOtpSendButton && (
            <button
              className="btn btn-accent btn-sm"
              onClick={handleOnClickOtpSendButton}
            >
              전송
            </button>
          )
        }
        defaultValue={state.value.email ?? undefined}
      />
      <BaseInput
        name="otp"
        label="OTP"
        icon={<MdKey size={21} />}
        message={state.message?.otp}
        type="password"
        isError={isError}
        defaultValue={state.value.otp ?? undefined}
      />
      {state.detail && (
        <span
          className={`${isError ? "text-error" : "text-success"} label-text-alt`}
        >
          {state.detail}
        </span>
      )}
      <SubmitButton
        label={{
          default: "인증하기",
          pending: "확인 중...",
        }}
        mt={state.message?.otp ? "mt-1" : "mt-4"}
      />
    </form>
  );
}
