import { ReactNode } from "react";
import Image from "next/image";
import EmojiFooter from "@/components/EmojiFooter";

interface Props {
  children: ReactNode;
  fill?: boolean;
  headline?: string;
}

export default function ErrorWrapper({
  children,
  headline = "오류 발생!",
  fill = false,
}: Props) {
  return (
    <div
      className={`hero ${fill ? "min-h-screen" : "pt-4 sm:pt-8 md:pt-12 lg:pt-16"}`}
    >
      <div className="hero-content flex-col text-center">
        <div className="relative aspect-square w-full">
          <Image src="/fluent-emoji/Warning.png" alt="wanring" fill />
        </div>
        <div className="max-w-sm">
          <h1 className="text-3xl font-extrabold">{headline}</h1>
          <div className="bordered my-6 rounded-sm bg-base-200 p-2">
            {children}
          </div>
          <EmojiFooter />
        </div>
      </div>
    </div>
  );
}
