export const fetchCityById = async (id: number) => {
    try {
        const res = await fetch(`/api/utils/city/${id}`, {
            method: "GET"
        });

        const data = await res.json();

        return data;
    } catch (e) {
        return e;
    }
}