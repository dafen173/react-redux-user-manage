import React, {useEffect} from "react"
import UserList444 from '../component/UserList444'
import {AddUserRedux} from '../component/AddUserRedux'

import { useDispatch, useSelector } from "react-redux"
import { getGroups } from "../action/getGroups"
import { getUsers } from "../action/getUsers"

export const UsersPage = () => {


    // const dispatchGroups = useDispatch()
    // useEffect(() => {
    //     dispatchGroups(getGroups())
    // }, [dispatchGroups])

    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getUsers())
    // }, [dispatch])


    return (
        <div className="wrapper">         
            <h1>Users Page</h1>  
            <h1>User Management</h1> 
            <UserList444 />
            <AddUserRedux />       
        </div> 
    )
}


