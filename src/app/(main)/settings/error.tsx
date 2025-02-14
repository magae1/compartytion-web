"use client";

import Image from "next/image";

import { ErrorProps } from "@/libs/type";

export default function Error({ error }: ErrorProps) {
  return (
    <div className="mt-32 flex flex-col items-center">
      <Image
        src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Dizzy%20Face.png"
        alt="Dizzy Face"
        width={240}
        height={240}
      />
      <p className="mt-4 text-2xl font-bold">{error.message}</p>
    </div>
  );
}
