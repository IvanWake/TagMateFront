export const cacheUserFormDataBySteps = (id: number, stepData: any) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("stepId " + id.toString(), JSON.stringify(stepData));
    }
}

export const getCurrentStep = () => {
    let formData = [];

    if (typeof window !== 'undefined') {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key && key.startsWith("stepId ")) {
                formData.push(JSON.parse(localStorage.getItem(key) || '{}'));
            }
        }
    }
    
    return { formData };
}
