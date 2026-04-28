export const getTodo = async () => {

    try {
       
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
        })

        const data = await response.json()
        return data
        
    } catch (error: any) {
        return error.message
    }

}