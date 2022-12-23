export const findProductDetail = async() => {
    try {
        const promise = await fetch(`http://localhost:8100/product/detail`, {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const response = await promise.json();
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}

export const findJson = async() => {
    try {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/todos/2`, {
            mode: "cors",
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        const response = await promise.json();
        return response;
    } catch (err) {
        return Promise.reject(err);
    }
}