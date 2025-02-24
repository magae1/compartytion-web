import { MdError } from "react-icons/md";

export default function SidebarError() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div
        role="alert"
        className="flex flex-col items-center gap-y-3 rounded-lg bg-error-content px-8 py-4"
      >
        <MdError size={36} className="text-error" />
        <span>오류가 발생했습니다!</span>
      </div>
    </div>
  );
}
