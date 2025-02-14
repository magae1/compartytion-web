import Link from "next/link";

import Header from "@/components/Header";

export default function AuthHeader() {
  return (
    <Header
      display="static"
      head={
        <Link href="/" className="btn btn-ghost no-animation gap-x-0">
          Compartytion
        </Link>
      }
      center={true}
    />
  );
}
