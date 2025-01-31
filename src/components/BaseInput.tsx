import { ReactNode, Ref } from "react";

interface Props {
  icon?: ReactNode;
  placeholder?: string;
  label?: string;
  message?: string;
  isError?: boolean;
  name: string;
  ref: Ref<HTMLInputElement | null>;
}

export default function BaseInput({
  ref,
  label,
  placeholder,
  message,
  name,
  isError = false,
  icon,
}: Props) {
  return (
    <label className="form-control w-full max-w-xs">
      {label && (
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
      )}
      <div className="input input-bordered flex items-center gap-x-2">
        {icon}
        <input
          className="grow"
          name={name}
          placeholder={placeholder}
          ref={ref}
        />
      </div>
      {message && (
        <div className="label">
          <span className={`label-text-alt ${isError && "text-error"}`}>
            {message}
          </span>
        </div>
      )}
    </label>
  );
}
