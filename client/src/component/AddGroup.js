import React, {useState, useEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
// import { getUsers } from '../action/getUsers'
// import { addUsers222 } from "../action/addUsers222"
import { groups } from "../containers/groups"
import {addGroup} from '../action/addGroup'
import { getUsers } from "../action/getUsers"


export const AddGroup = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

   //console.log('AddUserRedux!!!!')
    const [groupName, setGroupName] = useState('')
    const [groupDescription, setGroupDescription] = useState('')

    //const dispatch = useDispatch()
    const callBackHandler = (event) => {
        event.preventDefault()
        
        console.log(groupName)
        console.log(groupDescription)

        dispatch(addGroup(groupName, groupDescription))
        setGroupName('')
        setGroupDescription('')
    }
 
    return (     
        <form onSubmit={callBackHandler}>   
            <input value={groupName} onChange={ e => setGroupName(e.target.value)} />
            <input value={groupDescription} onChange={ e => setGroupDescription(e.target.value)} />          
            <button type="submit">Add Group</button>
        </form> 
    )
}



// const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getUsers())
//     }, [dispatch])