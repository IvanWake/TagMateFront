type HttpRequest = {
    url: string,
    options: {
        method: string,
        data: any
    }
}

export const httpRequest = ({ url, options }: HttpRequest) => {
    fetch(url, {
        method: options.method,
        body: options.data
    }).then((res) => {
            return res.json();
        })
}