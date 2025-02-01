import {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  ReactNode,
  Ref,
} from "react";

interface Props {
  icon?: ReactNode;
  placeholder?: string;
  label?: string;
  message?: string[];
  isError?: boolean;
  type?: HTMLInputTypeAttribute;
  name: string;
  defaultValue?: string | number | string[];
  ref?: Ref<HTMLInputElement | null>;
  autoComplete?: HTMLInputAutoCompleteAttribute;
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
  icon,
  autoComplete,
}: Props) {
  return (
    <label className="form-control w-full">
      {label && (
        <div className="pb-0.5 pl-1 pt-2">
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
          autoComplete={autoComplete}
        />
      </div>
      {message && (
        <div className="label flex-col items-start">
          {message.map((m, i) => (
            <span
              key={i}
              className={`label-text-alt ${isError && "text-error"}`}
            >
              {m}
            </span>
          ))}
        </div>
      )}
    </label>
  );
}
