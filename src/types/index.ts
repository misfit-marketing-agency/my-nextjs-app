export type Image = {
  path: string;
  width: number;
  height: number;
  position?: string;
};

export type Content = (
  | string
  | React.ReactNode
  | {
      heading: string;
      text: string | React.ReactNode;
    }
)[];

export type Work = {
  name: string;
  altName?: string;
  phrase: string | React.ReactNode;
  scope: string[];
  website: string;
  instagram?: string;
  description: string;
  image: Image;
  cover: Image;
  overview: {
    main: string;
    sub: (string | React.ReactNode)[];
  };
  images: (Partial<Image> & {
    path: string;
  })[];
  socials: {
    images: Image[];
    text?: string[];
    aspect?: string;
  };
  banner: Image;
  challenges: {
    list: string[];
    image: Image;
    content: Content;
  };
  solutions: {
    list: string[];
    image: Image;
    content: Content;
  };
  results: {
    list: string[];
    image: Image;
    content: Content;
  };
  gradient?: boolean;
};
