"use client";

import { useEffect } from "react";
import Image from "next/image";

import { ErrorProps } from "@/type";

export default function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-32 flex flex-col items-center">
      <label className="swap swap-rotate text-9xl">
        <input type="checkbox" />
        <div className="swap-on">
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png"
            alt="Wrench"
            width={240}
            height={240}
          />
        </div>
        <div className="swap-off">
          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Pick.png"
            alt="Wrench"
            width={240}
            height={240}
          />
        </div>
      </label>
      <p className="mt-4 text-lg font-bold">개발 중인 서비스입니다.</p>
    </div>
  );
}
