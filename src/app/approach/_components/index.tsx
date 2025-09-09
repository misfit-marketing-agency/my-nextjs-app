import ApproachHero from "./hero";
import ApproachProcess from "./process";
import ApproachServices from "./services";
import ApproachValues from "./values";

export default function ApproachMain() {
  return (
    <div className="w-full">
      <ApproachHero />
      <ApproachProcess />
      <ApproachValues />
      <ApproachServices />
    </div>
  );
}
