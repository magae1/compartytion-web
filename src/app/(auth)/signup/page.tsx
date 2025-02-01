import SignupForm from "@/app/(auth)/_components/SignupForm";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SignupPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  let email = searchParams.email;

  if (typeof email !== "string") {
    email = "";
  }

  return (
    <div className="container max-w-80 mx-auto">
      <SignupForm email={email} />
    </div>
  );
}
