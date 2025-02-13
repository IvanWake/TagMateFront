import { Interest } from "@/types/signup/steps";

export type Social = {
    social: string,
    link: string
}

export type Image = {
    id: string,
    path: string
}

export type ProfileData = {
    tag: string
    interests: Interest[],
    purpose: string,
    images: Image[],
    socials: Social[]
}

export type PersonalData = {
    name: string,
    lastName: string,
    avatar: string,
    city: string,
    birthDay: Date
}