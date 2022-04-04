export const removeUser = (id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:8080/api/manage-user/${id}`, {
              method: 'DELETE'
            }) 
        const json = await response.json()
        dispatch({type: 'DELETE_USER', payload: json })
    }
}

// function removeTodo(id){
//       fetch(`http://localhost:8080/api/manage-user/${id}`, {
//         method: 'DELETE'
//       }) 


