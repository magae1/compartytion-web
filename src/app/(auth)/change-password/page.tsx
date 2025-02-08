import { SearchParams } from "@/libs/type";
import ChangePasswordForm from "@/app/(auth)/_components/ChangPasswordForm";

export default async function ChangePasswordPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  let email = searchParams.email;

  if (typeof email !== "string") {
    email = "";
  }

  return (
    <div className="container mx-auto max-w-80 p-4">
      <ChangePasswordForm email={email} />
    </div>
  );
}
