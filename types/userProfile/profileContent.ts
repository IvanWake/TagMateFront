import { Interest } from "@/types/signup/steps";

type Social = {
    social: string,
    link: string
}

type Image = {
    id: string,
    path: string
}

export type ProfileContent = {
    tag: string
    interests: Interest[],
    purpose: string,
    images: Image[],
    socials: Social[]
}