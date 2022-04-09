import React, {useState, useEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import { getGroups } from "../action/getGroups"
//import { addUsers } from "../action/addUsers"
import UserItem from "./UserItem"


const UserList444 = () => {
    // const dispatchGroups = useDispatch()
    // useEffect(() => {
    //     dispatchGroups(getGroups())
    // }, [dispatchGroups])

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const userSelector = useSelector(state => state.users.items)
    console.log(userSelector[0])


    return (
        <div>
            {userSelector.map( (item, index) => 
                    <UserItem 
                        todo={item} 
                        key={item.id} 
                        index={index} 
                        /* onChange={props.onToggle} */
                    />
            )}
        </div>      
    )
}


export default UserList444