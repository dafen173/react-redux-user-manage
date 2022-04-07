import React from 'react'
import {useState} from "react"
import { useDispatch, useSelector } from "react-redux"
import './EditUserModal.css'
import {editUser} from '../action/editUser'
import { groups } from '../containers/groups'

function EditUserRedux (props) {
    const [isOpen, setIsOpen] = useState(false)

    const groupNameSelector = useSelector(state => state.groups.groupitems)
    const [userValue, setUserValue] = useState(props.todo.username)
    //const [groupValue, setGroupValue] = useState(groupNameSelector[0].groupname)
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
                    
                    {groupNameSelector.map( item => 
                        <option key={item.id} value={item.groupname}>{item.groupname}</option>                                                   
                    )}
                    
                    {/* <option value='oasis'>oasis777</option> */}
                    {/* <option value={groups.nirvana}>{groups.nirvana}</option>
                    <option value={groups.slipknot}>{groups.slipknot}</option>
                    <option value={groups.soad}>{groups.soad}</option>  
                    <option value={groups.korn}>{groups.korn}</option> */}
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

