import CultureHero from "./hero";
import CultureLeadership from "./leadership";
import CultureTeam from "./team";

export default function CultureMain() {
  return (
    <div className="w-full">
      <CultureHero />
      <CultureLeadership />
      <CultureTeam />
    </div>
  );
}
