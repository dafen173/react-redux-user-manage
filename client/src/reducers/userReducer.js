//import initialState from "../store/initialState"
//const goods = (state = [], action) => {


const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_GOODS' :
            console.log('add goods work')
            console.log(state)
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    image: action.image
                }
            ]
        case 'ADD_USERS' :
            console.log('addUsers work')
            //console.log(state)
            return [
                ...state,
                {
                    username: action.username,
                    groupname: action.groupname
                }
            ]
        case 'GET_USERS' :
            return {
                ...state,
                items: action.payload
            }           
           
        default:
            return state
    }

}

export default userReducer


