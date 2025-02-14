import Image from "next/image";

import { getRandomIndex } from "@/libs/getRandomIndex";

const bgColors: string[][] = [
  ["bg-red-500", "text-black"],
  ["bg-amber-500", "text-white"],
  ["bg-yellow-600", "text-white"],
  ["bg-lime-300", "text-black"],
  ["bg-cyan-400", "text-white"],
  ["bg-purple-600", "text-white"],
  ["bg-rose-500", "text-black"],
];

interface Props {
  username: string;
  avatar: string | null;
  size?: number;
}

export default function ProfileAvatar({ username, avatar, size = 8 }: Props) {
  const width = `w-${size}`;

  if (!avatar) {
    const char = (username.at(0) ?? "").toUpperCase();
    const idx: number = getRandomIndex(username, bgColors.length);
    return (
      <div className="avatar placeholder h-full w-full">
        <div
          className={`${width} rounded-full ${bgColors[idx][0]} ${bgColors[idx][1]}`}
        >
          <span>{char}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="avatar h-full w-full">
      <div className={`${width} rounded-full`}>
        <Image src={avatar} alt={username} />
      </div>
    </div>
  );
}
