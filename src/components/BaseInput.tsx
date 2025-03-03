import {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  ReactNode,
  Ref,
} from "react";

interface Props {
  /**
   * 앞쪽에 위치할 아이콘
   */
  icon?: ReactNode;
  /**
   * 입력 값에 대한 짧은 힌트를 명시
   */
  placeholder?: string;
  /**
   * input 태그 위에 달릴 라벨
   */
  label?: string;
  /**
   * input 태그 하단에 추가될 메시지
   */
  message?: string[];
  /**
   * 입력 값이 현재 에러인지 여부. 메시지의 색을 변경
   */
  isError?: boolean;
  /**
   * input 태그의 타입을 변경
   */
  type?: HTMLInputTypeAttribute;
  /**
   * form data에서 명시될 이름
   */
  name: string;
  /**
   * 입력 기본 값
   */
  defaultValue?: string | number | string[];
  /**
   * input 태그에 대한 참조
   */
  ref?: Ref<HTMLInputElement | null>;
  /**
   * input의 자동완성 속성
   */
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
    <label className="floating-label">
      <span className={isError ? "text-error" : undefined}>{label}</span>
      <div
        className={`input flex w-full items-center gap-x-2 ${isError && "input-error"}`}
      >
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
        <p className={`validator-hint ${isError && "text-error"}`}>
          {message.reduce(
            (s, m) => (
              <>
                {s}
                <>
                  {m}
                  <br />
                </>
              </>
            ),
            <></>,
          )}
        </p>
      )}
    </label>
  );
}
