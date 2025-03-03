"use client";

import { useFormStatus } from "react-dom";

type LabelType = {
  default: string;
  pending: string;
};

interface Props {
  /**
   * 버튼에 들어갈 내용
   */
  label?: LabelType;
  /**
   * 상단 마진
   */
  mt?: string;
}

export default function SubmitButton({
  label = { default: "제출", pending: "제출 중..." },
  mt = "mt-0",
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`btn btn-sm btn-neutral ${mt}`}
      disabled={pending}
    >
      {pending && <span className="loading loading-spinner"></span>}
      {pending ? label.pending : label.default}
    </button>
  );
}
