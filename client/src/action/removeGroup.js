export const removeGroup = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:8080/api/manage-group/${id}`, {
              method: 'DELETE'
            }) 
        const json = await response.json()
        dispatch({type: 'DELETE_GROUP', payload: json })
    }
}




