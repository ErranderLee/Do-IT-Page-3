export interface ImgProps {
  url?: string;
  width?: string;
}

export interface ContentImgProps extends ImgAltProps {
  radius?: string;
  maxWidth?: string;
}

export interface ImgAltProps extends ImgProps {
  alt: string;
}

export interface LoginProps {
  type: string;
}

export interface DateProps {
  year: number;
  month: number;
}

export interface DateAction {
  type: "increment" | "decrement";
}

interface BasicAtomProps {
  width?: string;
  height?: string;
  borderColor?: string;
}

export interface BasicButtonProps extends BasicAtomProps {
  backGroundColor?: string;
  title?: string;
  color?: string;
  onClick?: () => void;
}

export interface LoginButtonProps extends BasicButtonProps {
  grid?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
}

export interface ApplyButtonProps extends BasicButtonProps {
  backGroundColor?: string;
  fontSize?: string;
  radius?: string;
}

export interface BasicInputProps extends BasicAtomProps {
  margin?: string;
  padding?: string;
  placeholder?: string;
  background?: string;
  radius?: string;
  shadow?: string;
  type?: string;
  inputRef?: any;
  onChange?: () => void;
}

export interface BoardType {
  boardType?: string;
  apiSrc: string;
  boardApiSrc?: string;
  pageSrc: string;
  previewSize?: number;
  previewType?: "card" | "ranking" | "image" | "calendar" | "basic";
  alignPreview?: string;
  viewSize?: number;
}

export interface BoardInfoType {
  [index: string]: BoardType;
}

export interface PosticDefaultProps {
  title: string;
  studyLeader: string;
  status: string;
  member: number;
  type: "processing" | "collecting" | "done";
}

export interface BoardContentType {
  index: number;
  board: string;
  title: string;
  text: string;
  date: string;
  images: string[];
  writer: string;
  visitor: number;
  idx: number;
}

export interface StudyContentType {
  index: number;
  name: string;
  decription: string;
  totalHeadcount: number;
  leaderUserIdx: number;
  leaderName: string;
  status: "processing" | "collecting" | "done";
  idx: number;
}

export interface ProjectContentType extends StudyContentType {
  techStack?: string[];
}

export interface RankingContentType {
  index: number;
  rating: number;
  tier: string;
  name: string;
  idx: number;
}

export interface PreviewProps {
  previewType?: "card" | "ranking" | "image" | "calendar" | "basic";
  content: ContentType;
  type?: string;
}

export type ContentType =
  | BoardContentType
  | ProjectContentType
  | RankingContentType;

export interface DetailViewType {
  idx: number;
  content: BoardContentType;
}
