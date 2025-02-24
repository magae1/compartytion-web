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

  return (
    <div className="container mx-auto max-w-80 p-4">
      <SignupForm email={email} />
    </div>
  );
}
