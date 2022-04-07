export const addGroup = (groupName, groupDescription) => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/api/manage-group', {
            method: 'POST',      
            body: JSON.stringify({
            groupname: groupName, 
            groupdescription: groupDescription
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        dispatch({type: 'ADD_GROUP', payload: json })
    }
}



