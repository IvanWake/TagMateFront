export const cacheUserFormDataBySteps = (id: number, stepData: any) => {
    localStorage.setItem("stepId " + id.toString(), JSON.stringify(stepData));
}

export const getCurrentStep = () => {
    let formData = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (key.startsWith("stepId ")) {
            formData.push(JSON.parse(localStorage.getItem(key)));
        }
    }
    return { formData };
}