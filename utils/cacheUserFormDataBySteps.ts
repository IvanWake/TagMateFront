export const cacheUserFormDataBySteps = (id: string, stepData: any) => {
    localStorage.setItem(id, JSON.stringify(stepData));
}