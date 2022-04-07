import React, {useContext} from "react"
import PropTypes from "prop-types"
//import Context from '../context'
import Modal from './EditUserModal'
import DeleteUser from "./DeleteUser"
import EditUserRedux from './EditUserRedux'

const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 2rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

function UserItem ( {todo, index} ) {

  //  const {removeTodoKey} = useContext(Context)

    const classes = []
    if (todo.completed) {
      classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                {/* <input 
                  type='checkbox' 
                  checked={todo.completed}
                  style={styles.input} 
                  onChange={() => onChange(todo.id)} 
                /> */}

                <strong>{index + 1}</strong>
                &nbsp;
                &nbsp;
                &nbsp;
                {todo.username}  
                &nbsp;
                &nbsp;
                &nbsp;
                {todo.created}   
                &nbsp;
                &nbsp;
                &nbsp;
                {todo.groupname} 
            </span>   

            <div>
              <EditUserRedux todo={todo}/>
              <DeleteUser todo={todo}/>  
            </div>                    
        </li>
    )
}



/* TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
  } */

export default UserItem

      
