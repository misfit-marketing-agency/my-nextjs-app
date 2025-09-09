import WorkHero from "./hero";
import WorkOverview from "./overview";
import WorkShowcase from "./showcase";
import WorkImageList from "./image-list";
import WorkPhaseBanner from "./phase-banner";
import WorkWriteUp from "./write-up";
import WorkBanner from "./banner";
import { Work } from "@/types";

type Props = {
  work: Work;
};

export default function WorkMain({
  work: {
    name,
    altName,
    description,
    phrase,
    cover,
    image,
    scope,
    website,
    instagram,
    overview,
    images,
    socials,
    banner,
    challenges,
    solutions,
    results,
    gradient,
  },
}: Props) {
  return (
    <div className="w-full">
      <WorkHero
        name={name}
        description={description}
        phrase={phrase}
        cover={cover}
        image={image}
        scope={scope}
        website={website}
      />
      <WorkOverview main={overview.main} sub={overview.sub} />
      <WorkImageList
        images={[
          {
            image: images?.[0]?.path,
            alt: name,
          },
          {
            image: images?.[1]?.path,
            alt: name,
          },
        ]}
        className="bg-secondary"
      />
      <WorkShowcase
        name={altName ?? name}
        text={socials.text}
        images={socials.images.map((image) => image.path)}
        aspect={socials.aspect}
        instagram={instagram}
        gradient={gradient}
      />
      {images.length > 4 && (
        <WorkImageList
          images={[
            {
              image: images?.[2]?.path,
              alt: name,
            },
            {
              image: images?.[3]?.path,
              alt: name,
            },
          ]}
          className="bg-secondary"
        />
      )}
      <WorkPhaseBanner
        phase="challenges"
        list={challenges.list}
        className={images.length > 4 ? "bg-secondary" : ""}
      />
      <WorkWriteUp
        label="Challenges"
        main={challenges.image}
        sub={challenges.content}
      />
      <WorkBanner name={name} image={banner.path} />
      <WorkImageList
        images={[
          {
            image: images?.[4]?.path ?? images?.[2]?.path,
            alt: name,
          },
          {
            image: images?.[5]?.path ?? images?.[3]?.path,
            alt: name,
          },
        ]}
      />
      <WorkPhaseBanner phase="solutions" list={solutions.list} />
      <WorkWriteUp
        label="Solutions"
        main={solutions.image}
        sub={solutions.content}
      />
      <WorkPhaseBanner phase="results" list={results.list} />
      <WorkWriteUp
        label="Results"
        main={results.image}
        sub={results.content}
        gradient
      />
    </div>
  );
}
