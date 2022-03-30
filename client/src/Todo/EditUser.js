import React, {useState, useContext} from "react"
import PropTypes, { func } from 'prop-types'
//import Context from "../context"


function EditUser (props) {

    //const todoCurrent333 = useContext(Context.todoCurrent)

    const [userValue, setUserValue] = useState(props.todoEditUser.username)
    const [groupValue, setGroupValue] = useState(props.todoEditUser.groupname)

    const callBackHandler = (e) => {
        e.preventDefault()
        if (userValue.trim()) {
            props.handlerEdit( userValue, groupValue )
            setUserValue('')
        }

        console.log('log from edituser '+ props.todoEditUser.username)
        console.log('log from edituser '+ props.todoEditUser.groupname)
        console.log('log from edituser '+ props.todoEditUser.id)
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
            <button type="submit">Edit User</button> 
            
            
            
            {/* {editHandler ? 
            <button type="submit">Edit User</button> 
            : <button type="submit">Add User</button>} */}
            
        </form>
    )
}


export default EditUser


