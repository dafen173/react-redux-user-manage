import React, {useState, useEffect, useLayoutEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import { addUsers } from "../action/addUsers"
import { getGroups } from "../action/getGroups"
import { groups } from "../containers/groups"
import { editGroupOnUsersPage } from "../action/editGroupOnUsersPage"


export const AddUserRedux = () => {
    
    const dispatchGroups = useDispatch()
    useEffect(() => {
        dispatchGroups(getGroups())
    }, [])
    
    const groupNameSelector = useSelector(state => state.groups.groupitems)
 
    const [userValue, setUserValue] = useState('')
    const [groupValue, setGroupValue] = useState('')
    //const [groupValue, setGroupValue] = useState(groupNameSelector[0].groupname)
    
    useEffect(() => {
        if (groupNameSelector.length)
        setGroupValue(groupNameSelector[0].groupname)
     }, [groupNameSelector])
    

    const dispatchUsers = useDispatch()
    //const dispatchPutGroupName = useDispatch()

    const callBackHandler = (event) => {
        event.preventDefault()

        const selectedGroup = groupNameSelector.find(el => el.groupname === groupValue)
        // console.log(selectedGroup)
        // console.log(selectedGroup.id)
        dispatchUsers(addUsers(userValue, groupValue, selectedGroup.id))
        setUserValue('')
        console.log('groupValue is ' + groupValue)
        //dispatchPutGroupName(editGroupOnUsersPage(groupValue, selectedGroup.id))
    }

    // const selectHandler = (event) => {
    //     event.preventDefault();
    //     //setGroupValue(event.target.value)

    //     //setGroupValue(prev => prev + 1)

    //     // const test = groupNameSelector.find(el => el.groupname === groupValue)
    //     // console.log(test)
    // }
    

    // console.log(groupValue)
    // const test = groupNameSelector.find(el => el.groupname === groupValue)
    // console.log(test)



    return (
        <>           
            <form onSubmit={callBackHandler}> 
                <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
                <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>
                    {groupNameSelector.map( item => 
                        // <option key={item.id} value={item.groupname}>{item.groupname}</option> 
                        <option key={item.id} value={item.groupname} data={item.id}>{item.groupname}</option>                                                 
                    )}
                </select>                    
                <button type="submit">Add User</button>
            </form>

            
        </>
    )
}




            // <form onSubmit={callBackHandler}> 
            //     <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
            //     <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>  
            //         {/* <option value={groups.nirvana}>{groups.nirvana}</option> */}
            //         <option value={groups.nirvana}>{groupNameSelector[2].groupname}</option>
            //         <option value={groups.slipknot}>{groups.slipknot}</option>
            //         <option value={groups.soad}>{groups.soad}</option>
            //         <option value={groups.korn}>{groups.korn}</option>
            //     </select>                    
            //     <button type="submit">Add User</button>
            // </form>