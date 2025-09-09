import HomeBanner from "./banner";
import HomeHero from "./hero";
import HomeWork from "./work";

export default function HomeMain() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeWork />
      <HomeBanner />
    </div>
  );
}
