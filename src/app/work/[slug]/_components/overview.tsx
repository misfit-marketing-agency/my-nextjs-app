import { Content } from "@/types";
import WorkWriteUp from "./write-up";

type Props = {
  main: string;
  sub: Content;
};

export default function WorkOverview({ main, sub }: Props) {
  return <WorkWriteUp label="Overview" main={main} sub={sub} gradient />;
}
