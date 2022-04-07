import React from 'react'
import { useDispatch } from "react-redux"
//import {removeUser} from '../action/removeUser'
import { removeGroup } from '../action/removeGroup'

function DeleteGroup (props) {
  const dispatch = useDispatch()
  const deleteId = props.group.id

  function deleteHandler () {
    console.log(deleteId)
    dispatch(removeGroup(deleteId))
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


