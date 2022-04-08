import React, {useState, useEffect, useLayoutEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
import { addUsers222 } from "../action/addUsers222"
import { getGroups } from "../action/getGroups"
import { groups } from "../containers/groups"


export const AddUserRedux = () => {
    

    const dispatchGroups = useDispatch()
    useEffect(() => {
        dispatchGroups(getGroups())
    }, [])
    
    const groupNameSelector = useSelector(state => state.groups.groupitems)
 
    const [userValue, setUserValue] = useState('')
    const [groupValue, setGroupValue] = useState('')
    //const [groupValue, setGroupValue] = useState(groupNameSelector[0].groupname)
    const [groupKey, setGroupKey] = useState(null)
    

    useEffect(() => {
        if (groupNameSelector.length)
        setGroupValue(groupNameSelector[0].groupname)
     }, [groupNameSelector])
    //setGroupValue(groupNameSelector[0].groupname)
    

    //==================================================
    //const dispatch = useDispatch()
//     const dispatch = useDispatch()
//     useEffect(() => {
//         dispatch(getUsers())
//     }, [])

//     const users555 = useSelector(state => state.userReducer)
//     console.log(users555)
// //======================================================

    const dispatchUsers = useDispatch()

    const callBackHandler = (event) => {
        event.preventDefault()
        dispatchUsers(addUsers222(userValue, groupValue))
        setUserValue('')

        //console.log('group key is ' + groupKey)
        console.log('groupValue is ' + groupValue)
    }
        
    //console.log(groupNameSelector[2].groupname)

    // for (const i of groupNameSelector) {
    //     console.log(i.groupname)
    // }
    

    // if (groupNameSelector.length === 0) {
    //     console.log('Data is not found!!!!')
    //     return <div>Data is not found!!!!</div> 
    //  } 

    //  console.log(groupNameSelector[0].groupname)
    //  console.log('groupValue is ' + groupValue)

    //setGroupValue(groupNameSelector[0].groupname)
     
    const selectHandler = (event) => {
        event.preventDefault()
        setGroupValue(event.target.value)
        
        console.log(event.target.value)
        console.log(event.currentTarget)
        
        let value = event.currentTarget.getAttribute('value')
        console.log(value)

        let data = event.target.getAttribute('data')
        console.log(data)


        // let value = event.target.getAttribute('value')
        // console.log(value)
        //console.log(event.detail.item)
    }
    
    
    return (
        <>           
            <form onSubmit={callBackHandler}> 
                <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
                {/* <select value={groupValue} onChange={ ( e => setGroupValue(e.target.value) ) && ( k => setGroupKey(k.target.key) ) }  >   */}
                {/* <select value={groupValue} onChange={e => setGroupValue(e.target.value)}> */}
                <select value={groupValue} onChange={selectHandler}>
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