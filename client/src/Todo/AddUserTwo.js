import React, {useState} from "react"
import PropTypes, { func } from 'prop-types'
import {connect} from 'react-redux'


//function AddUserTwo ({handler}) {...........

//const AddUserTwo = ({syncUsers}) => {

function AddUserTwo ({handler}) {
    const [userValue, setUserValue] = useState('')
    const [groupValue, setGroupValue] = useState('oasis')

    const callBackHandler = (e) => {
        e.preventDefault()
        if (userValue.trim()) {
            handler( userValue, groupValue )
            setUserValue('')
        }
    }
    
    return (
        <form onSubmit={callBackHandler}> 
            <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
            <select value={groupValue} onChange={e => setGroupValue(e.target.value)}>  
                <option value='oasis'>oasis777</option>
                <option value="slipknot">slipknot777</option>
                <option value="soad">soad777</option>  
                <option value="korn">korn777</option>
            </select>
            <button type="submit">Add User</button> 
            
            
            
            {/* {editHandler ? 
            <button type="submit">Edit User</button> 
            : <button type="submit">Add User</button>} */}
            
        </form>
    )
}




export default AddUserTwo
