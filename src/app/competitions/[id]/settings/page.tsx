import { PathParams } from "@/app/competitions/[id]/_libs/type";

interface Props {
  params: PathParams;
}

export default async function CompetitionSettingsPage(props: Props) {
  const id = (await props.params).id;

  return <>{id}settings</>;
}
