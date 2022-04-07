import React, {useState, useEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import { addUsers } from "../action/addUsers"
//import TodoItem from "./UserItem"
import {getGroups} from '../action/getGroups'
import {GroupItem} from './GroupItem'

export const GroupsList = () => {
    //console.log('AddUserRedux444')
    
    //const groups = useSelector(state => state.users.items)
    //state.groupitems
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getGroups())
    }, [dispatch])
    //console.log(groups)
    
    const groupSelector = useSelector(state => state.groups.groupitems)

    return (
        <div>
            {groupSelector.map( (item, index) => 
                    <GroupItem 
                        group={item} 
                        key={item.id} 
                        index={index} 
                    />
            )}
        </div>  
    )
}


//export default GroupsList
