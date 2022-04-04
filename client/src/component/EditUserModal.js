import React from 'react'
import {useState} from "react"
import './EditUserModal.css'
import EditUser from './EditUser'
//import AddUserTwo from '../Todo/AddUserTwo'
//import Context from '../context'

function Modal (props) {
  const [isOpen, setIsOpen] = useState(false)

  //const {editUserKey} = useContext(Context)  //отправить данные в App.js

  function getEditHandler (editUser, editGroup) {
    console.log(editUser)
    console.log(editGroup)
    console.log(props.todoModal.id)
    
    if (editUser || editGroup) {
      setIsOpen(false)
      
    } 
    

    //() => editUserKey(editUser, editGroup, props.todoModal.id)


    /* fetch(`http://localhost:8080/api/manage-user/${props.todoModal.id}`, {
        method: 'PUT',      
        body: JSON.stringify({
          id: props.todoModal.id, 
          username: editUser, 
          groupname: editGroup
        }),
        headers: {
          'Content-Type': 'application/json'
        }
    }) */
    /* .then(response => response.json())
    .then(todosFromServer => {
        setTodos(todosFromServer)
        setLoading(false)             
    }) */

  }

  return (  
    <React.Fragment>
      <button onClick={() => setIsOpen(true)}>
          Edit
      </button>

      {isOpen && (
        <div className='modal'>
          <div className='modal-body'>
            <h1>Edit User</h1>
            <p>Введите новые данные</p>
            
            <EditUser handlerEdit={getEditHandler} todoEditUser={props.todoModal} />
          
            <button onClick={() => setIsOpen(false)}>
              Cancel
            </button>

          </div>
        </div>
      )}
    </React.Fragment>
        

  )     
}
  


/* export default class Modal extends React.Component {
  state = {
    isOpen: false
  } */

  
  export default Modal

