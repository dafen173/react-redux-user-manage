import React from 'react'
import {useState} from "react"
import { useDispatch } from "react-redux"
import './EditUserModal.css'
import {editUser} from '../action/editUser'

function EditUserRedux (props) {
    const [isOpen, setIsOpen] = useState(false)

    const [userValue, setUserValue] = useState(props.todo.username)
    const [groupValue, setGroupValue] = useState(props.todo.groupname)

    const editId = props.todo.id
    const dispatch = useDispatch()

    const editHandler = (e) => {
        e.preventDefault()
        console.log(userValue)
        console.log(groupValue)

        dispatch(editUser(userValue, groupValue, editId))
        setIsOpen(false)
    }
//const users555 = useSelector(state => state.users.items)

return (  
    <React.Fragment>
      <button className="edit" onClick={() => setIsOpen(true)}>
          Edit
      </button>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <h1>Edit User</h1>
            <p>Введите новые данные</p>
            
            {/* <EditUser handlerEdit={getEditHandler} todoEditUser={props.todoModal} /> */}
          
            <form onSubmit={editHandler}> 
                <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
                <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>  
                    <option value='oasis'>oasis777</option>
                    <option value="slipknot">slipknot777</option>
                    <option value="soad">soad777</option>  
                    <option value="korn">korn777</option>
                </select>
                <button type="submit">Edit User</button>            
            </form>

            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
        

  )     
}

export default EditUserRedux

