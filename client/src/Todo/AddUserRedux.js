import React, {useState, useEffect} from "react"
import PropTypes, { func } from 'prop-types'
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from '../action/getUsers'
//import {connect} from 'react-redux'
//import { addGoods } from "../action"
import { addUsers } from "../action/addUsers"


//const AddUserTwo = ({syncUsers}) => {

const AddUserRedux = () => {
    
    console.log('AddUserRedux!!!!')
    
    
    const [userValue, setUserValue] = useState('')
    const [groupValue, setGroupValue] = useState('oasis')
   
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
        // console.log(event.target.elements.title.value)
        // let data = event.target.elements
        //dispatch(addGoods(data.id.value, data.title.value, data.image.value))
        /* if (userValue.trim()) {
            handler( userValue, groupValue )
            setUserValue('')
        } */

        dispatchUsers(addUsers(userValue, groupValue))
        setUserValue('')
    }

    // const getPostsHandler = (event) => {
    //     event.preventDefault()
    //     dispatchUsers(getUsers())   
    // }

    
    return (
        
        <form onSubmit={callBackHandler}> 

            {/* <button onClick={getPostsHandler}>GET POSTS!!!</button> */}

            <input value={userValue} onChange={ e => setUserValue(e.target.value)} />
            <select value={groupValue} onChange={ e => setGroupValue(e.target.value)}>  
                <option value='oasis'>oasis777</option>
                <option value="slipknot">slipknot777</option>
                <option value="soad">soad777</option>  
                <option value="korn">korn777</option>
            </select>

            {/* <div>
                <input type='text' name='id' defaultValue='173' />
            </div>
            <div>
                <input type='text' name='title' defaultValue='nirvana' />
            </div>
            <div>
                <input type='text' name='image' defaultValue='photo link' />
            </div> */}
            {/* <div>
                <button type="submit">Add new goods</button>
            </div> */}
              
            {/* {editHandler ? 
            <button type="submit">Edit User</button> 
            : <button type="submit">Add User</button>} */}
                        
            <button type="submit">Add User</button>
        </form>

        
    )
}


export default AddUserRedux
