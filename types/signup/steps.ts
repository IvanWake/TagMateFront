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
    category_id: number,
    id: number,
    name: string
}