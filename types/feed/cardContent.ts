import { StaticImageData } from "next/image";

export type cardData = {
  photo: StaticImageData;
  match: number;
  city: string;
  name: string;
  lastName: string;
  age: number;
  hobbys: {
    icon: string;
    name: string;
  }[];
};

export type buttonState = {
  disabled: boolean;
};