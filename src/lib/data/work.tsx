import Inter from "@/components/inter";
import { Image, Work } from "@/types";

export const works: {
  label: string;
  description: string;
  href: string;
  core: Image;
  image: Image;
}[] = [
  {
    label: "Unagi Scooters",
    description:
      "Helping a scooter brand move a community, and turn everyday rides into something electric.",
    href: "/work/unagi-scooters",
    core: {
      path: "/assets/images/unagi/core.jpg",
      width: 2867,
      height: 1910,
    },
    image: {
      path: "/assets/images/unagi/image.jpg",
      width: 1776,
      height: 2662,
    },
  },
  {
    label: "The Gram",
    description:
      "Setting a new standard for cannabis and redefining what high looks like.",
    href: "/work/the-gram",
    core: {
      path: "/assets/images/the-gram/core.jpg",
      width: 1218,
      height: 812,
    },
    image: {
      path: "/assets/images/the-gram/image.jpg",
      width: 955,
      height: 1433,
    },
  },
  {
    label: "Flock Social",
    description:
      "Cutting through the noise and redefining what going out feels like.",
    href: "/work/flock-social",
    core: {
      path: "/assets/images/flock-social/core.jpg",
      width: 735,
      height: 946,
    },
    image: {
      path: "/assets/images/flock-social/image.jpg",
      width: 709,
      height: 977,
    },
  },
  {
    label: "Inner Circle",
    description:
      "Helping a dating community go beyond the app and bring chemistry back IRL.",
    href: "/work/the-inner-circle",
    core: {
      path: "/assets/images/inner-circle/core.jpg",
      width: 1086,
      height: 724,
    },
    image: {
      path: "/assets/images/inner-circle/image.jpg",
      width: 1612,
      height: 2867,
    },
  },
];

export const detailedWorks: Work[] = [
  {
    name: "Unagi Scooters",
    phrase: "Where commuting meets culture.",
    scope: ["Digital", "Strategy"],
    website: "https://unagiscooters.com",
    instagram: "https://www.instagram.com/unagiscooters",
    description:
      "Unagi Scooters is redefining how people move through cities - sleek, lightweight, electric scooters delivered via subscription, designed for freedom, efficiency, and bold self-expression. We elevated the brand’s presence across all channels - translating their product excellence into equally refined creative, strategy, and storytelling.",
    image: {
      path: "/assets/images/unagi/core.jpg",
      width: 2867,
      height: 1910,
    },
    cover: {
      path: "/assets/images/unagi/cover.jpg",
      width: 3993,
      height: 2574,
    },
    overview: {
      main: "We partnered with Unagi to create content that didn’t just sell scooters — it sold a lifestyle. Our UGC and influencer campaigns drove over 22M views and grew their IG and TikTok to 100k+, while also championing a distinct brand aesthetic for young professionals navigating city life.",
      sub: [
        "To help Unagi stand out in a crowded micromobility market, we developed a social media strategy rooted in culture, aesthetics, and aspiration.",
        <>
          Our approach prioritized visual storytelling and UGC that reflected
          the sleek, urban lifestyle of Unagi riders <Inter>-</Inter> young
          professionals commuting through major cities.
        </>,
        <>
          We activated influencer partnerships and built a content pipeline that
          turned everyday rides into aspirational moments, driving both
          engagement and conversions. The result was a cohesive brand presence
          that didn<Inter>&apos;</Inter>t just showcase the product{" "}
          <Inter>-</Inter> it created a community around it.
        </>,
      ],
    },
    images: [
      {
        path: "/assets/images/unagi/image_1.jpg",
      },
      {
        path: "/assets/images/unagi/image_2.jpg",
      },
      /*{
        path: "/assets/images/unagi/image_3.jpg",
      },
      {
        path: "/assets/images/unagi/image_4.jpg",
      },*/
      {
        path: "/assets/images/unagi/image_5.png",
      },
      {
        path: "/assets/images/unagi/image_6.png",
      },
    ],
    socials: {
      images: [
        {
          path: "/assets/images/unagi/social_1.png",
          width: 1080,
          height: 1080,
        },
        {
          path: "/assets/images/unagi/social_2.png",
          width: 1080,
          height: 1080,
        },
      ],
    },
    banner: {
      path: "/assets/images/unagi/banner.jpg",
      width: 1728,
      height: 1152,
    },
    challenges: {
      list: [
        "Outdated Aesthetic",
        "Misaligned Targeet Audience",
        "Low Engagement",
      ],
      image: {
        path: "/assets/images/unagi/challenges.jpg",
        width: 1536,
        height: 864,
      },
      content: [
        {
          heading: "Outdated Aesthetic",
          text: (
            <>
              Unagi<Inter>&apos;</Inter>s existing social media presence didn
              <Inter>&apos;</Inter>t reflect the sleek, design<Inter>-</Inter>
              forward appeal of their product. The visuals felt generic and
              inconsistent, lacking the polish and personality needed to stand
              out in a crowded lifestyle tech space. Misfit worked with Unagi to
              reimagine their aesthetic<Inter>—</Inter>elevating the look and
              feel of their content to align with the minimalist, modern energy
              of their scooters and the people who ride them. The result was a
              streamlined, high<Inter>-</Inter>end social presence that felt
              intentional, current, and brand<Inter>-</Inter>aligned.
            </>
          ),
        },
        {
          heading: "Misaligned Targeet Audience",
          text: (
            <>
              While Unagi<Inter>&apos;</Inter>s product was built for urban
              professionals looking for a stylish way to commute, their content
              wasn<Inter>&apos;</Inter>t speaking to that demographic. Messaging
              and visuals failed to capture the mindset or lifestyle of their
              ideal customer, leading to a disconnect between the brand and its
              audience. We helped reposition the brand narrative to focus on
              aspirational city living<Inter>—</Inter>highlighting design,
              convenience, and culture<Inter>—</Inter>to better resonate with
              the people most likely to convert.
            </>
          ),
        },
        {
          heading: "Low Engagement",
          text: (
            <>
              Before partnering with Misfit, Unagi<Inter>&apos;</Inter>s social
              platforms lacked community energy. Their content struggled to
              drive interaction or spark conversations, leading to flat growth
              and low visibility. We implemented a more dynamic content mix
              <Inter>—</Inter>including UGC, reels, and influencer partnerships
              <Inter>—</Inter>that brought real users into the story. By
              shifting the focus from the scooter to the rider, we created
              opportunities for engagement, authenticity, and sustained brand
              momentum.
            </>
          ),
        },
      ],
    },
    solutions: {
      list: ["Visual Refresh", "Audience Alignment", "Community Building"],
      image: {
        path: "/assets/images/unagi/solutions.jpg",
        width: 2313,
        height: 2891,
      },
      content: [
        {
          heading: "Visual Refresh",
          text: (
            <>
              To bring Unagi<Inter>&apos;</Inter>s social presence up to par
              with the sleekness of its product, we established a fresh visual
              language rooted in minimalism, movement, and modernity. We created
              design systems for content that felt clean yet dynamic, allowing
              the product to shine while also setting a consistent tone across
              platforms. Every post became part of a larger aesthetic story,
              helping the brand feel instantly recognizable and aspirational at
              a glance.
            </>
          ),
        },
        {
          heading: "Audience Alignment",
          text: (
            <>
              We redefined Unagi<Inter>&apos;</Inter>s content strategy to
              better resonate with their ideal rider: young professionals
              commuting through vibrant cities. By centering real
              <Inter>-</Inter>life use cases, incorporating culturally relevant
              references, and showcasing moments of freedom, convenience, and
              style, we helped Unagi speak the language of its core demographic.
              The shift turned casual scrollers into prospective customers by
              showing how the product fit seamlessly into their lifestyle.
            </>
          ),
        },
        {
          heading: "Community Building",
          text: (
            <>
              To spark meaningful engagement, we prioritized content that made
              followers feel like participants<Inter>—</Inter>not just
              spectators. Through curated UGC, strategic influencer
              collaborations, and interactive story<Inter>-</Inter>driven posts,
              we brought authentic voices into the mix and gave the audience
              space to see themselves in the brand. This shift from product
              <Inter>-</Inter>focused to people<Inter>-</Inter>focused content
              helped grow a community around Unagi, not just awareness of it.
            </>
          ),
        },
      ],
    },
    results: {
      list: [
        "Increased Visibility",
        "Stronger Brand Identity",
        "Higher Engagement",
      ],
      image: {
        path: "/assets/images/unagi/results.jpg",
        width: 756,
        height: 1344,
      },
      content: [
        {
          heading: "Increased Visibility",
          text: (
            <>
              Our influencer campaigns and UGC strategy helped Unagi show up in
              more of the right feeds <Inter>-</Inter> those of young, style
              <Inter>-</Inter>conscious professionals across major cities. As
              content began to circulate organically, brand awareness grew
              steadily, bringing new eyes to the scooters without the need for
              heavy ad spend.
            </>
          ),
        },
        {
          heading: "Stronger Brand Identity",
          text: (
            <>
              With a polished visual system and a lifestyle<Inter>-</Inter>first
              narrative, Unagi<Inter>&apos;</Inter>s social became more than
              just a feed<Inter>-</Inter>
              it became a vibe. The consistent aesthetic, aspirational tone, and
              purposeful storytelling gave the brand a clear identity that stood
              out from competitors and resonated with its ideal audience.
            </>
          ),
        },
        {
          heading: "Higher Engagement",
          text: (
            <>
              By shifting the focus from product to people, we invited the
              audience into the brand story. UGC, real rider moments, and
              creator<Inter>-</Inter>led content turned passive viewers into
              active participants, driving more likes, shares, saves, and
              comments across platforms.
            </>
          ),
        },
      ],
    },
  },
  {
    name: "The Gram",
    phrase: "Refined smoke for the modern aesthetic.",
    scope: ["Digital", "Strategy"],
    website: "/#",
    description:
      "The Gram isn’t just another cannabis brand, it’s a cultural reset. Designed for those who value aesthetics as much as quality, The Gram blends premium flower with a lifestyle-first approach. It’s clean, elevated, and unapologetically stylish, replacing old-school stoner tropes with a new era of cannabis: curated, intentional, and cool without trying too hard.",
    image: {
      path: "/assets/images/the-gram/core.jpg",
      width: 1218,
      height: 812,
    },
    cover: {
      path: "/assets/images/the-gram/cover.png",
      width: 1536,
      height: 990,
    },
    overview: {
      main: "The Gram’s social presence was reimagined to reflect a bold, high-end take on cannabis—one that matches the brand’s vision of curated luxury and elevated lifestyle.",
      sub: [
        <>
          The Gram came to us with a clear vision: to position cannabis as part
          of a premium, curated lifestyle. They weren<Inter>&apos;</Inter>t
          selling a product<Inter>—</Inter>they were building a vibe.
        </>,
        <>
          We refined their brand presence through content that felt fresh,
          elevated, and culturally relevant. From art<Inter>-</Inter>directed
          product shoots to social<Inter>-</Inter>first creative strategy, every
          touchpoint was intentional.
        </>,
        <>
          The result was a feed that felt less like a dispensary and more like a
          design studio<Inter>—</Inter>chic, high<Inter>-</Inter>quality, and
          made to resonate with the new era of cannabis consumers.
        </>,
      ],
    },
    images: [
      {
        path: "/assets/images/the-gram/image_1.jpg",
      },
      {
        path: "/assets/images/the-gram/image_2.jpg",
      },
      {
        path: "/assets/images/the-gram/image_3.jpg",
      },
      {
        path: "/assets/images/the-gram/image_4.jpg",
      },
      {
        path: "/assets/images/the-gram/image_5.jpg",
      },
      {
        path: "/assets/images/the-gram/image_6.jpg",
      },
    ],
    socials: {
      images: [
        {
          path: "/assets/images/the-gram/social_1.png",
          width: 1080,
          height: 1080,
        },
      ],
      text: [
        "We shaped The Gram’s Instagram into a reflection of its high-end cannabis identity—curated, stylish, and unmistakably modern.",
        "Every post was crafted to feel intentional, from sleek product shots to culturally relevant moments that connected with today’s cannabis consumer. The feed became a blend of premium branding and approachable lifestyle.",
        "The result was a visually cohesive grid that stood apart from the typical dispensary—positioning The Gram as a tastemaker in cannabis culture, not just another brand on the shelf.",
      ],
      aspect: "453 / 912",
    },
    banner: {
      path: "/assets/images/the-gram/banner.jpg",
      width: 1636,
      height: 2048,
    },
    challenges: {
      list: [
        "Outdated Stereotypes",
        "Inconsistent Values",
        "Unclear Brand Voice",
      ],
      image: {
        path: "/assets/images/the-gram/challenges.jpg",
        width: 1365,
        height: 2048,
      },
      content: [
        {
          heading: "Outdated Stereotypes",
          text: (
            <>
              Despite offering a premium product, The Gram risked being lumped
              in with outdated cannabis tropes<Inter>—</Inter>grungy, unserious,
              and male<Inter>-</Inter>dominated. The brand needed to break from
              cliché and reframe cannabis as stylish, elevated, and culturally
              relevant.
            </>
          ),
        },
        {
          heading: "Inconsistent Values",
          text: (
            <>
              The visual identity lacked cohesion across channels, making it
              difficult to communicate the level of quality the brand stood for.
              Without a defined aesthetic system, the content didn
              <Inter>&apos;</Inter>t reflect the refined experience The Gram was
              trying to create.
            </>
          ),
        },
        {
          heading: "Unclear Brand Voice",
          text: (
            <>
              The Gram had a clear vision internally, but it wasn
              <Inter>&apos;</Inter>t yet translating externally. The tone,
              language, and storytelling on social weren<Inter>&apos;</Inter>t
              consistently aligned with the lifestyle<Inter>-</Inter>first,
              design<Inter>-</Inter>forward identity they wanted to own.
            </>
          ),
        },
      ],
    },
    solutions: {
      list: ["Narrative Shift", "Visual Direction", "Voice Development"],
      image: {
        path: "/assets/images/the-gram/solutions.jpg",
        width: 1365,
        height: 2048,
      },
      content: [
        {
          heading: "Visual Refresh",
          text: (
            <>
              We repositioned The Gram as more than a cannabis brand
              <Inter>—</Inter>it became a lifestyle. Through strategic
              storytelling and social content, we helped the brand break away
              from tired stereotypes and enter a space that felt fresh, stylish,
              and culturally in tune.
            </>
          ),
        },
        {
          heading: "Visual Direction",
          text: (
            <>
              We established a clear, elevated visual identity that brought
              consistency across every post. From creative direction to product
              photography, we leaned into design<Inter>-</Inter>forward imagery
              that felt intentional, premium, and unmistakably The Gram.
            </>
          ),
        },
        {
          heading: "Voice Development",
          text: (
            <>
              We refined The Gram<Inter>&apos;</Inter>s tone to match its
              audience<Inter>—</Inter>cool, confident, and never try
              <Inter>-</Inter>hard. Every caption, CTA, and story carried a
              distinct voice that reinforced the brand<Inter>&apos;</Inter>s
              identity while keeping it approachable and aspirational.
            </>
          ),
        },
      ],
    },
    results: {
      list: [
        "Elevated Perception",
        "Cohesive Aesthetic",
        "Stronger Engagement",
      ],
      image: {
        path: "/assets/images/the-gram/results.jpg",
        width: 1365,
        height: 2048,
      },
      content: [
        {
          heading: "Elevated Perception",
          text: (
            <>
              By redefining how cannabis could look and feel, The Gram began to
              stand out as a tastemaker in the space. The brand was no longer
              seen as just another dispensary<Inter>—</Inter>it became
              synonymous with style, quality, and cultural relevance.
            </>
          ),
        },
        {
          heading: "Cohesive Aesthetic",
          text: (
            <>
              A clear visual system brought consistency across all platforms,
              reinforcing brand recognition and trust. The feed told a story,
              where every asset felt intentional, elevated, and unmistakably on
              <Inter>-</Inter>brand.
            </>
          ),
        },
        {
          heading: "Stronger Engagement",
          text: (
            <>
              With a refined voice and lifestyle<Inter>-</Inter>driven content,
              The Gram sparked real interaction. Comments, shares, and saves
              grew as the audience began to see the brand as part of their world
              <Inter>—</Inter>not just a product in it.
            </>
          ),
        },
      ],
    },
  },

  {
    name: "Flock Social",
    phrase: "Where the party meets the people.",
    scope: ["Digital", "Strategy"],
    website: "/#",
    instagram: "https://www.instagram.com/flocksocialnyc",
    description:
      "Flock is an NYC nightlife app that flips the script on social tech. Designed to get users off their phones and into real-life connections, Flock makes it easier to meet people while you’re out - not while you’re scrolling. By combining social discovery with real-time venue insights, it helps users find the vibe, meet the crowd, and make nights out more spontaneous, social, and actually fun.",
    image: {
      path: "/assets/images/flock-social/core.jpg",
      width: 735,
      height: 946,
    },
    cover: {
      path: "/assets/images/flock-social/cover.jpg",
      width: 1265,
      height: 811,
    },
    overview: {
      main: "We helped Flock grow a social presence rooted in real connection—by putting a face to the brand and building community in NYC, one night out at a time.",
      sub: [
        "To grow awareness in a competitive nightlife market, we focused on organic social strategy with a local lens—creating content that spoke directly to the experience of going out in New York. ",
        <>
          We hired a personality to become the face of the brand, using UGC
          <Inter>-</Inter>style content to build trust, familiarity, and
          presence. This personified the brand and gave it a human touch—making
          Flock feel more like a friend than a platform.
        </>,
        <>
          By leaning into authenticity and humor, we helped Flock shift from
          unknown startup to culturally embedded brand. Users weren
          <Inter>&apos;</Inter>t just downloading it—they were talking about it,
          sharing it, and showing up for it in real life.
        </>,
      ],
    },
    images: [
      {
        path: "/assets/images/flock-social/image_1.jpg",
      },
      {
        path: "/assets/images/flock-social/image_2.jpg",
      },
      {
        path: "/assets/images/flock-social/image_3.jpg",
      },
      {
        path: "/assets/images/flock-social/image_4.jpg",
      },
      {
        path: "/assets/images/flock-social/image_5.jpg",
      },
      {
        path: "/assets/images/flock-social/image_6.jpg",
      },
    ],
    socials: {
      images: [
        {
          path: "/assets/images/flock-social/social_1.png",
          width: 1080,
          height: 1080,
        },
      ],
      text: [
        "The Gram came to us with a clear vision: to position cannabis as part of a premium, curated lifestyle. They weren’t selling a product, they were building a vibe.",
        "We refined their brand presence through content that felt fresh, elevated, and culturally relevant. From art-directed product shoots to social-first creative strategy, every touchpoint was intentional.",
        "The result was a feed that felt less like a dispensary and more like a design studio - chic, high-quality, and made to resonate with the new era of cannabis consumers.",
      ],
    },
    banner: {
      path: "/assets/images/flock-social/banner.jpg",
      width: 1080,
      height: 1080,
    },
    challenges: {
      list: [
        "Low Brand Awareness",
        "No Human Connection",
        "Lack of Local Relevance",
      ],
      image: {
        path: "/assets/images/flock-social/challenges.jpg",
        width: 1536,
        height: 864,
      },
      content: [
        {
          heading: "Low Brand Awareness",
          text: (
            <>
              As a new app in a crowded social space, Flock struggled to get
              noticed<Inter>—</Inter>especially by its target audience of
              nightlife<Inter>-</Inter>savvy young people. Without a strong
              digital presence, the brand was missing key opportunities to build
              momentum and drive app downloads.
            </>
          ),
        },
        {
          heading: "No Human Connection",
          text: (
            <>
              Flock<Inter>&apos;</Inter>s concept was built on real
              <Inter>-</Inter>world interaction, but the brand itself lacked a
              relatable presence. With no recognizable personality or consistent
              tone, it felt more like a tech tool than a cultural player.
            </>
          ),
        },
        {
          heading: "Lack of Local Relevance",
          text: (
            <>
              Flock aimed to thrive in NYC<Inter>&apos;</Inter>s nightlife
              scene, but its content didn<Inter>&apos;</Inter>t speak directly
              to the city or the experience of going out there. Without a
              localized strategy, the app felt disconnected from the community
              it wanted to engage.
            </>
          ),
        },
      ],
    },
    solutions: {
      list: [
        "Personified the Brand",
        "Built Local Credibility",
        "Fueled Organic Growth",
      ],
      image: {
        path: "/assets/images/flock-social/solutions.jpg",
        width: 1280,
        height: 1920,
        position: "center 45%",
      },
      content: [
        {
          heading: "Personified the Brand",
          text: (
            <>
              We hired a creator to become the face of Flock, bringing energy,
              personality, and relatability to the app. Through consistent UGC
              <Inter>-</Inter>style content, we gave the brand a voice users
              could connect with—making Flock feel like a real part of the
              social scene, not just another app.
            </>
          ),
        },
        {
          heading: "Built Local Credibility",
          text: (
            <>
              We tailored content specifically for NYC<Inter>&apos;</Inter>s
              nightlife crowd<Inter>—</Inter>highlighting venues, experiences,
              and real moments out. This hyper<Inter>-</Inter>local approach
              helped Flock resonate with its core audience and position itself
              as a go<Inter>-</Inter>to for the in<Inter>-</Inter>the
              <Inter>-</Inter>know social set.
            </>
          ),
        },
        {
          heading: "Fueled Organic Growth",
          text: (
            <>
              Instead of relying on paid ads, we leaned into consistent, creator
              <Inter>-</Inter>led content that sparked conversation and shares.
              The result was a steady stream of engagement that built buzz and
              encouraged app downloads through word of mouth and community
              energy.
            </>
          ),
        },
      ],
    },
    results: {
      list: [
        "Stronger Recognition",
        "Cultural Relevance",
        "Increased App Engagement",
      ],
      image: {
        path: "/assets/images/flock-social/results.jpg",
        width: 1098,
        height: 1372,
      },
      content: [
        {
          heading: "Stronger Recognition",
          text: (
            <>
              With a consistent face and tone across platforms, Flock became
              instantly more recognizable. What started as a new name in the App
              Store began to feel like a familiar part of NYC nightlife culture.
            </>
          ),
        },
        {
          heading: "Cultural Relevance",
          text: (
            <>
              By creating content that mirrored how people actually go out,
              talk, and connect, Flock carved out a place in the conversation.
              It stopped feeling like an app<Inter>—</Inter>and started feeling
              like something you<Inter>&apos;</Inter>d hear about from a friend.
            </>
          ),
        },
        {
          heading: "Increased App Engagement",
          text: (
            <>
              As visibility and trust grew, so did user action. More people were
              downloading the app, opening it before nights out, and using it to
              connect in real<Inter>-</Inter>time<Inter>—</Inter>turning social
              media presence into real<Inter>-</Inter>world momentum.
            </>
          ),
        },
      ],
    },
  },

  {
    name: "The Inner Circle",
    altName: "Inner Circle",
    phrase: "Helping NYC singles ditch dating apps.",
    scope: ["Digital", "Strategy"],
    website: "/#",
    description:
      "Inner Circle is redefining what modern dating looks like, by taking it offline. Curated for ambitious, socially active singles in NYC, their exclusive events feel more like a scene than a singles mixer. We helped bring that brand vision to life through creative strategy, social content, and event curation. By leaning into exclusivity, aesthetics, and real-world connection, we helped turn Inner Circle from a concept into a cultural experience.",
    image: {
      path: "/assets/images/inner-circle/core.jpg",
      width: 735,
      height: 946,
    },
    cover: {
      path: "/assets/images/inner-circle/cover.jpg",
      width: 2728,
      height: 1789,
    },
    overview: {
      main: "We partnered with Inner Circle to craft a brand that felt exclusive but accessible—building a bold identity, curating real-world events, and launching a social strategy rooted in connection.",
      sub: [
        <>
          We started by shaping a brand that mirrored the experience Inner
          Circle was offering: curated, elevated, and community<Inter>-</Inter>
          driven. The visual identity, tone of voice, and storytelling were all
          designed to attract ambitious singles looking for something more
          meaningful than a swipe.
        </>,
        <>
          Next, we developed a social strategy that brought the brand to life
          online<Inter>—</Inter>balancing aspirational aesthetics with real
          moments from events. This helped build anticipation, strengthen
          credibility, and create a consistent presence across platforms.
        </>,
        <>
          Finally, we helped curate event experiences that matched the brand
          <Inter>&apos;</Inter>s energy. From vibe to venue, we made sure each
          touchpoint felt aligned with the Inner Circle ethos—social
          <Inter>-first</Inter>, stylish, and built for real connection
        </>,
      ],
    },
    images: [
      {
        path: "/assets/images/inner-circle/image_1.jpg",
      },
      {
        path: "/assets/images/inner-circle/image_2.jpg",
      },
      {
        path: "/assets/images/inner-circle/image_3.jpg",
      },
      {
        path: "/assets/images/inner-circle/image_4.jpg",
      },
      {
        path: "/assets/images/inner-circle/image_5.jpg",
      },
      {
        path: "/assets/images/inner-circle/image_6.jpg",
      },
    ],
    socials: {
      images: [
        {
          path: "/assets/images/inner-circle/social_1.png",
          width: 1080,
          height: 1080,
        },
        {
          path: "/assets/images/inner-circle/social_2.png",
          width: 1080,
          height: 1080,
        },
      ],
      text: [
        "We brought the Inner Circle brand to life on social by tapping into the energy of real people and real stories.",
        "Through a fun, relatable take on trendy formats - think voiceovers, storytelling, and selfie-style UGC, we built a presence that felt raw, real, and magnetic.",
        "The content doesn’t just promote events, it captures a vibe, building trust and community with every scroll.",
      ],
    },
    banner: {
      path: "/assets/images/inner-circle/banner.jpg",
      width: 2731,
      height: 4096,
    },
    challenges: {
      list: [
        "Undefined Brand Identity",
        "Low Social Traction",
        "Unmemorable Event Experience",
      ],
      image: {
        path: "/assets/images/inner-circle/challenges.jpg",
        width: 2731,
        height: 4096,
      },
      content: [
        {
          heading: "Undefined Brand Identity",
          text: (
            <>
              Inner Circle had a strong concept, but its brand presence wasn
              <Inter>&apos;</Inter>t fully developed. Without a clear visual
              language or tone of voice, it lacked the polish and personality
              needed to stand out in the dating and events space.
            </>
          ),
        },
        {
          heading: "Low Social Traction",
          text: (
            <>
              Despite hosting successful in<Inter>-</Inter>person events, the
              brand wasn
              <Inter>&apos;</Inter>t translating that momentum online. Social
              content lacked consistency and strategy, making it difficult to
              build awareness or generate anticipation between events.
            </>
          ),
        },
        {
          heading: "Unmemorable Event Experience",
          text: (
            <>
              The events themselves had potential, but the details
              <Inter>—</Inter>from branding to flow<Inter>—</Inter>didn
              <Inter>&apos;</Inter>t always match the elevated experience Inner
              Circle aimed to offer. Without a cohesive brand presence across
              touchpoints, the events risked blending in rather than standing
              out.
            </>
          ),
        },
      ],
    },
    solutions: {
      list: [
        "Brand Refinement",
        "Strategic Social Presence",
        "Elevated Event Design",
      ],
      image: {
        path: "/assets/images/inner-circle/solutions.jpg",
        width: 2048,
        height: 1365,
      },
      content: [
        {
          heading: "Brand Refinement",
          text: (
            <>
              We developed a bold, cohesive brand identity that mirrored the
              exclusivity and energy of the Inner Circle experience. From tone
              of voice to visual systems, we crafted a look and feel that
              instantly communicated: this isn<Inter>&apos;</Inter>t your
              average dating event.
            </>
          ),
        },
        {
          heading: "Strategic Social Presence",
          text: (
            <>
              We built a social strategy that extended the in<Inter>-</Inter>
              person buzz to digital platforms. Through curated content and a
              consistent brand voice, we created anticipation around upcoming
              events and reinforced the community between them.
            </>
          ),
        },
        {
          heading: "Elevated Event Design",
          text: (
            <>
              We partnered with the team to elevate the experience at every
              touchpoint<Inter>—</Inter>from visuals and signage to the flow of
              each night. The result was a series of events that felt premium,
              polished, and unmistakably Inner Circle.
            </>
          ),
        },
      ],
    },
    results: {
      list: [
        "Clearer Brand Positioning",
        "Increased Social Engagement",
        "Stronger Event Turnout",
      ],
      image: {
        path: "/assets/images/inner-circle/results.jpg",
        width: 1444,
        height: 2178,
        position: "center 45%",
      },
      content: [
        {
          heading: "Clearer Brand Positioning",
          text: (
            <>
              With a strong identity in place, Inner Circle began standing out
              as more than just a singles event<Inter>—</Inter>it became a
              recognizable lifestyle brand. The elevated visuals and tone
              attracted the exact kind of people they wanted in the room.
            </>
          ),
        },
        {
          heading: "Increased Social Engagement",
          text: (
            <>
              Our content strategy turned followers into fans. Posts began
              generating more comments, shares, and DMs, creating buzz ahead of
              each event and extending the impact long after the night ended.
            </>
          ),
        },
        {
          heading: "Stronger Event Turnout",
          text: (
            <>
              With better branding and a clear social voice, Inner Circle events
              started to fill up faster and attract a more aligned crowd. The
              experience felt more curated, more exciting, and more like the
              kind of scene people wanted to be part of.
            </>
          ),
        },
      ],
    },
    gradient: false,
  },
];
