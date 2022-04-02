import { createStore } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {compose, applyMiddleware} from 'redux'
import rootReducer from './index'
import initialState from "../store/initialState"
//const goods = (state = [], action) => {

// const defaultState = {
//     items: [],
//     isFetching: true,
// }

// export const store = createStore(
//     rootReducer, 
//     initialState, 
//     composeWithDevTools(applyMiddleware(thunk))
//   );


const userReducer = (state = initialState, action) => {
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
            return {
                ...state,
                // {
                //     username: action.username,
                //     groupname: action.groupname
                // }
                //...action.payload  
                items: state.items.concat([action.payload])     
                
//return { ...state, posts: state.posts.concat([action.payload]) }
            }
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




