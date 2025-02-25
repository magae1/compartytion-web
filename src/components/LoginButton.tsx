import Link from "next/link";

export default function LoginButton() {
  return (
    <Link href="/login" className="btn btn-accent btn-sm">
      로그인
    </Link>
  );
}
