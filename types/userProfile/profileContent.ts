import { Interest } from "@/types/signup/steps";

export type Social = {
  social: string;
  link: string;
};

export type Image = {
  id: string;
  path: string;
};

export type ProfileData = {
  tag: string;
  interests: Interest[];
  commonInterests?: number[];
  purpose: string;
  images: Image[];
  socials: Social[];
  publicProfile?: boolean;
  isUserMate: string;
  inBlackList: boolean;
  isBlocked: boolean;
};

export type PersonalData = {
  name: string;
  lastName: string;
  avatar: string;
  city: string;
  birthDay: Date;
  isUserByTag?: boolean;
  tag: string;
  isUserMate: string;
  isBlocked: boolean;
  inBlackList: boolean;
};

export type BannerData = {
  link: string;
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

export interface UserProfileResponse {
  userData: {
    name: string;
    lastName: string;
    city: {
      city: string;
    };
    avatar: {
      path: string;
    };
    birthDay: Date;
    serviceId: string;
    purpose: string;
    interests: Interest[];
    commonInterests?: number[];
    socials: Social[];
    images: Image[];
  };
  isBlocked: boolean;
  inBlackList: boolean;
}
