import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import TodoItem from "../Todo/TodoItem"
import { getUsers } from '../action/getUsers'

const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }



function UserList333 () {

    // console.log('=======================')
    // console.log(data)
    // console.log('=======================')

    // const dispatchUsers = useDispatch()
    // useEffect(() => {
    // dispatchUsers(getUsers())
    // }, [])

    const users777 = useSelector(state => state.userReducer)
    console.log('useSelector!!!!!!!')
    console.log(users777)

    

    return (

        <ul style={styles.ul}>
            { users777[0].map( (item, index) => {
                return (
                    <TodoItem 
                        todo={item} 
                        key={item.id} 
                        index={index} 
                        /* onChange={props.onToggle} */
                    />
                )
            }) }
        </ul>

    )
    
}

/* UserListTwo.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
} */

export default UserList333

