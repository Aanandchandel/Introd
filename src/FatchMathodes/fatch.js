const fatchApi = async (url, header, method = "POST",data) => {
    try {
        const requestOptions = {
            method: method,
            mode: "cors",
            headers: header?{...header,"Content-Type": "application/json"}: {
                "Content-Type": "application/json",
            }
        };


        if (method !== "GET" && method !== "HEAD") {
            requestOptions.body = JSON.stringify(data);
        }

        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error to propagate it to the caller
    }
}

export default fatchApi