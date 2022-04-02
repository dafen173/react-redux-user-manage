export const addUsers = (username, groupname) => ({
    type: 'ADD_USERS',
    payload: {
                username: username,
                groupname: groupname
            }
        
   // payload: {items: [{username: username, groupname: groupname}]}
       
})



