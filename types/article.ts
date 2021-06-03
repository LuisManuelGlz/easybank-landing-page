import { Img } from "./img";

export type Article = {
  image: Img;
  author: string;
  title: string;
  content: string;
};