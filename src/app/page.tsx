import Link from "next/link";

import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header>
        <Link href="/login" className="btn btn-accent btn-sm">
          로그인
        </Link>
      </Header>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Com<code>party</code>tion
            </h1>
            <p className="pb-6"></p>
            <Link href="/login" className="btn btn-primary">
              시작하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
