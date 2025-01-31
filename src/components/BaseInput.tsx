import { HTMLInputTypeAttribute, ReactNode, Ref } from "react";

interface Props {
  icon?: ReactNode;
  placeholder?: string;
  label?: string;
  message?: string[];
  isError?: boolean;
  type?: HTMLInputTypeAttribute;
  name: string;
  defaultValue?: string | number | string[];
  ref: Ref<HTMLInputElement | null>;
}

export default function BaseInput({
                                    ref,
                                    label,
                                    placeholder,
                                    message,
                                    name,
                                    defaultValue,
                                    type = "text",
                                    isError = false,
                                    icon
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
          type={type}
          className="grow"
          name={name}
          placeholder={placeholder}
          ref={ref}
          defaultValue={defaultValue}
        />
      </div>
      {message && (
        <div className="label flex-col items-start">
          {message.map((m, i) => (
            <span key={i} className={`label-text-alt ${isError && "text-error"}`}>
            {m}
          </span>
          ))}
        </div>
      )}
    </label>
  );
}
