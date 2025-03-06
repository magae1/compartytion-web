import { PathParams } from "@/libs/type";

interface Props {
  params: PathParams;
}

export default async function CompetitionManagePage(props: Props) {
  const id = (await props.params).id;
  return <>{id}manage</>;
}
