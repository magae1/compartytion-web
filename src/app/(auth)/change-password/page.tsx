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

  return <ChangePasswordForm email={email} />;
}
