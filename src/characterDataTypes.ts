export interface Fallback {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface Source {
  srcSet: string;
  type: string;
  sizes: string;
}

export interface Images {
  fallback: Fallback;
  sources: Source[];
}

export interface GatsbyImageData {
  layout: string;
  backgroundColor: string;
  images: Images;
  width: number;
  height: number;
}

export interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

export interface LocalFile {
  childImageSharp: ChildImageSharp;
}

export interface SmallImage {
  localFile: LocalFile;
}

export interface Fallback2 {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface Source2 {
  srcSet: string;
  type: string;
  sizes: string;
}

export interface Images2 {
  fallback: Fallback2;
  sources: Source2[];
}

export interface GatsbyImageData2 {
  layout: string;
  backgroundColor: string;
  images: Images2;
  width: number;
  height: number;
}

export interface ChildImageSharp2 {
  gatsbyImageData: GatsbyImageData2;
}

export interface LocalFile2 {
  childImageSharp: ChildImageSharp2;
}

export interface CardImage {
  localFile: LocalFile2;
}

export interface Fallback3 {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface Source3 {
  srcSet: string;
  type: string;
  sizes: string;
}

export interface Images3 {
  fallback: Fallback3;
  sources: Source3[];
}

export interface GatsbyImageData3 {
  layout: string;
  backgroundColor: string;
  images: Images3;
  width: number;
  height: number;
}

export interface ChildImageSharp3 {
  gatsbyImageData: GatsbyImageData3;
}

export interface LocalFile3 {
  childImageSharp: ChildImageSharp3;
}

export interface FullImage {
  localFile: LocalFile3;
}

export interface Backstory {
  backstory: string;
}

export interface Cv {
  kr: string;
  jpn: string;
  en: string;
}

export interface Level1 {
  hp: string;
  atk: string;
  def: string;
}

export interface Level200 {
  hp: string;
  atk: string;
  def: string;
}

export interface Stats {
  level1: Level1;
  level200: Level200;
}

export interface BasicAttack {
  raw: string;
}

export interface DescriptionLevel1 {
  raw: string;
}

export interface DescriptionLevel10 {
  raw: string;
}

export interface JpnDescriptionLevel1 {
  raw: string;
}

export interface JpnDescriptionLevel10 {
  raw: string;
}

export interface TextNode {
  data: {};
  marks: [];
  nodeType: string;
  value: string;
}

export interface ListNode {
  data: {};
  content: [
    {
      data: {};
      content: [
        {
          data: {};
          marks: [];
          value: string;
          nodeType: string;
        },
        {
          data: {};
          marks: [];
          value: string;
          nodeType: string;
        }
      ];
      nodeType: string;
    },
    {
      data: {};
      content: [
        {
          data: {};
          marks: [
            {
              type: string;
            }
          ];
          value: string;
          nodeType: string;
        }
      ];
      nodeType: string;
    }
  ];
  nodeType: string;
}

export interface Skill {
  unitId: string;
  skillId: string;
  name: string;
  nameJpn: string | null;
  slot: string;
  type: string;
  cooldown: number | null;
  descriptionLevel1: DescriptionLevel1;
  descriptionLevel10: DescriptionLevel10;
  jpnDescriptionLevel1: JpnDescriptionLevel1 | null;
  jpnDescriptionLevel10: JpnDescriptionLevel10 | null;
}

export interface Ratings {
  overall: string;
  pve: string;
  pvp: string;
}

export interface Review {
  raw: string;
}

export interface Pros {
  raw: string;
}

export interface Cons {
  raw: string;
}

export interface Node {
  id: string;
  updatedAt: string;
  createdAt: string;
  unitId: number;
  name: string;
  slug: string;
  smallImage: SmallImage;
  cardImage: CardImage;
  fullImage: FullImage;
  rarity: string;
  element: string;
  weapon: string;
  class: string;
  burstType: string;
  manufacturer: string;
  squad: string;
  backstory: Backstory;
  cv: Cv;
  stats: Stats;
  weaponName: string | null;
  ammoCapacity: number;
  reloadTime: number;
  controlMode: string;
  basicAttack: BasicAttack;
  skills: Skill[];
  specialities: string[] | null;
  releaseDate: string;
  ratings: Ratings;
  review: Review | null;
  pros: Pros | null;
  cons: Cons | null;
  isNew: boolean | null;
  isReviewPending: boolean | null;
  isUpdated: boolean | null;
}

export interface AllCharacters {
  nodes: Node[];
}

export interface RootObject {
  allCharacters: AllCharacters;
}
