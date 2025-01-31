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
}
export default function SubmitButton({
  label = { default: "제출", pending: "제출 중..." },
}: Props) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-info btn-sm" disabled={pending}>
      {pending && <span className="loading loading-spinner"></span>}
      {pending ? label.pending : label.default}
    </button>
  );
}
