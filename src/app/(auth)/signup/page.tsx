import SignupForm from "@/app/(auth)/_components/SignupForm";
import { SearchParams } from "@/libs/type";

export default async function SignupPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  let email = searchParams.email;

  if (typeof email !== "string") {
    email = "";
  }

  return <SignupForm email={email} />;
}
