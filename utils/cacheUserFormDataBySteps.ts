export const cacheUserFormDataBySteps = (id: number, stepData: any) => {
    localStorage.setItem(id.toString(), JSON.stringify(stepData));
}