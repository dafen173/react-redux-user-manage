import React from 'react'
import { useDispatch, useSelector } from "react-redux"
//import {removeUser} from '../action/removeUser'
import { removeGroup } from '../action/removeGroup'

function DeleteGroup (props) {
  const dispatch = useDispatch()
  const deleteId = props.group.id

  const userSelector = useSelector(state => state.users.items)

  function deleteHandler () {
    console.log(deleteId)
    console.log(props.group.groupname)
    //dispatch(removeGroup(deleteId))

    let groupIsEmpty = true
    for (let i = 0; i < userSelector.length; i++) { 
      for (let key in userSelector[i]) { 
        if (userSelector[i][key] === props.group.groupname) { 
          //console.log("key is:" + key + " index is:" + i); 
          console.log('yessssssssssssss')
          alert('Cannot be deleted! This group already has users and cannot be deleted!')
          groupIsEmpty = false
        } 
      } 
    } 
    if (groupIsEmpty) { 
      console.log("grop is empty, can be deleted!!!")
      dispatch(removeGroup(deleteId))
    }
    
  }


  return (  
    <React.Fragment>
      <button className="rm" onClick={deleteHandler}>
          Delete
      </button>   
    </React.Fragment>
  )     
}
    
export default DeleteGroup


