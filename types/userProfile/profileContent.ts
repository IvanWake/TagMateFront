import { Interest } from "@/types/signup/steps";

export type ProfileContent = {
    tag: string
    interests: Interest[],
    purpose: string
}