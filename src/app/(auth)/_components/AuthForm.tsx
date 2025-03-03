import { FormEventHandler, ReactNode } from "react";

interface Props {
  action?: (formData: FormData) => Promise<void> | void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  legend?: string;
}

export default function AuthForm({
  action,
  onSubmit,
  legend,
  children,
}: Props) {
  return (
    <form action={action} onSubmit={onSubmit}>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        {children}
      </fieldset>
    </form>
  );
}
