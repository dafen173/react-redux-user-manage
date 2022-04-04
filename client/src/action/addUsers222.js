export const addUsers222 = (userValue, groupValue) => {
    return async dispatch => {
        const response = await fetch('http://localhost:8080/api/manage-user', {
            method: 'POST',      
            body: JSON.stringify({
            username: userValue, 
            groupname: groupValue,
            created: new Date().toLocaleDateString()
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        dispatch({type: 'ADD_USER', payload: json })
    }
}


// function getFromHandler (userFromHandler, groupFromHandler) {
//       /* console.log(userFromHandler)
//       console.log(groupFromHandler) */

//       fetch('http://localhost:8080/api/manage-user', {
//                 method: 'POST',      
//                 body: JSON.stringify({
//                 username: userFromHandler, 
//                 groupname: groupFromHandler,
//                 created: new Date().toLocaleDateString()
//                 }),
//                 headers: {
//                 'Content-Type': 'application/json'
//                 }
//             })
//             .then(response => response.json())
//             .then(todosFromServer => {
//                 setTodos(todosFromServer)
//                 setLoading(false)             
//             })
//     }

