export const getUsers = () => {
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
        const json = await response.json()
        dispatch({type: 'GET_USERS', payload: json })
    }
}



//https://jsonplaceholder.typicode.com/posts?_limit=5
