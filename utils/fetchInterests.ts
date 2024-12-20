export const fetchInterests = async () => {
    try {
       const res = await fetch(`/api/utils/interests`, {
           method: "GET"
       });

       const data = await res.json();

       return data;
    } catch (e) {
        return e;
    }
}