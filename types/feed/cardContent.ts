export type cardData = {
  tag: string;
  photo: string;
  match: number;
  city: string;
  name: string;
  lastName: string;
  age: number;
  hobbys: {
    name: string;
  }[];
};

export type buttonState = {
  disabled: boolean;
};