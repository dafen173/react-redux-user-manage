export const getUsers = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/api/manage-user')
        const json = await response.json()
        dispatch({type: 'GET_USERS', payload: json })
    }
}




//https://jsonplaceholder.typicode.com/posts?_limit=5


//http://localhost:8080/api/manage-user