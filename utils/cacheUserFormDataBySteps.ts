export const cacheUserFormDataBySteps = (id: number, stepData: any) => {
    localStorage.setItem("stepId " + id.toString(), JSON.stringify(stepData));
}