import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header";
import EmojiFooter from "@/components/EmojiFooter";
import HeaderButtonGroup from "@/components/HeaderButtonGroup";

export default function NotFound() {
  return (
    <>
      <Header
        head={
          <Link href="/" className="btn btn-ghost no-animation gap-x-0">
            Compartytion
          </Link>
        }
        tail={<HeaderButtonGroup />}
      />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col text-center">
          <div className="relative aspect-square w-full">
            <Image
              src="/fluent-emoji/Red_Question_Mark.png"
              alt="red-question-mark"
              fill
            />
          </div>
          <h1 className="text-3xl font-extrabold">
            대회 정보를 찾을 수 없습니다.
          </h1>
          <Link href="/" className="btn btn-primary mb-6">
            홈으로
          </Link>
          <EmojiFooter />
        </div>
      </div>
    </>
  );
}
