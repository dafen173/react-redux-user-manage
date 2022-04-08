export const editGroupOnUsersPage = (groupValue, id) => {
    return async dispatch => {
        const response = await fetch(`http://localhost:8080/api/manage-user/${id}`, {
            method: 'PUT',      
            body: JSON.stringify({
            groupname: groupValue, 
            id: id
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        dispatch({type: 'EDIT_GROUP_ON_USERS_PAGE', payload: json })
    }
}




