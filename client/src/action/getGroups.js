export const getGroups = () => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/api/manage-group')
        const json = await response.json()
        dispatch({type: 'GET_GROUPS', payload: json })
    }
}



