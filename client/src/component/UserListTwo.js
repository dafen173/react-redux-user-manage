import React from "react"
import PropTypes from "prop-types"
//import { useDispatch, useSelector } from "react-redux"
import TodoItem from "../Todo/TodoItem"

const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }

function UserListTwo (data) {

    console.log('=======================')
    console.log(data)
    console.log('=======================')


    return (

        <ul style={styles.ul}>
            { data.users[0].map( (item, index) => {
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

export default UserListTwo

