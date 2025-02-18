export type Step = {
    stepId: number,
    nextStep?: () => {},
    prevStep?: () => {}
}

export type Category = {
    id: number,
    interests: Interest[],
    name: string
}

export type Interest = {
    _id: string,
    category_id: string,
    id: number,
    name: string
}