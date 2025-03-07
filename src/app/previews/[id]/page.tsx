import Link from "next/link";

import dayjs from "dayjs";
import { MdArrowOutward } from "react-icons/md";

import { PathParams } from "@/libs/type";
import { getCompetitionPreview } from "@/app/previews/[id]/_libs/actions";
import ProfileAvatar from "@/components/ProfileAvatar";

interface Props {
  params: PathParams;
}

export default async function Page(props: Props) {
  const id = (await props.params).id;

  const data = await getCompetitionPreview(id);

  const createdDate = dayjs(data.createdAt);

  return (
    <article className="mt-6 sm:mt-12">
      <header className="mx-4">
        <div className="mb-1 flex flex-wrap space-y-1 space-x-3">
          <time
            className="text-base-content/75"
            dateTime={createdDate.format("YYYY-MM-DD")}
          >
            {createdDate.format("YYYY년 M월 D일")}
          </time>
          {data.badges.map((b, i) => (
            <span key={i} className="badge badge-neutral font-semibold">
              {b}
            </span>
          ))}
        </div>
        <h1 className="mb-4 text-4xl/11 font-bold break-all sm:mb-8 sm:text-5xl/14">
          {data.title}
        </h1>
      </header>
      <div className="mx-4 my-4 flex items-center space-x-3 sm:my-6">
        <ProfileAvatar
          username={data.creator.username}
          avatar={data.creator.avatar}
        />
        <div className="flex flex-col">
          <span className="text-base-content/75 text-xs">대회 관리자</span>
          <span className="text-sm/3 font-semibold sm:text-base/4">
            {data.creator.username}
          </span>
        </div>
      </div>
      <div className="border-base-300 bg-base-200 border-t border-b px-2 py-4 sm:mx-4 sm:px-1">
        123
      </div>
      <div className="mx-4 mt-8 mb-12 sm:mt-12 sm:mb-16">
        <h6 className="text-base-content/75 mb-2 text-sm sm:text-base">
          대회 소개
        </h6>
        <p className="sm:text-lg">{data.introduction}</p>
      </div>
      <div className="flex justify-center">
        {data.isOnRecruiting ? (
          <Link href={""} target="_blank" className="btn btn-primary">
            참가 신청하러 가기 <MdArrowOutward />
          </Link>
        ) : (
          <button disabled className="btn">
            참가 신청하러 가기 <MdArrowOutward />
          </button>
        )}
      </div>
    </article>
  );
}
