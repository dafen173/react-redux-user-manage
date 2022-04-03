import React, {useContext} from "react"
import PropTypes from "prop-types"
//import Context from '../context'
import Modal from '../EditUserModal/EditUserModal'
import DeleteUser from "../component/DeleteUser"


const styles = {
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid #ccc',
      borderRadius: '4px',
      marginBottom: '.5rem'
    },
    input: {
      marginRight: '1rem'
    }
  }

function TodoItem ( {todo, index, onChange} ) {

  //  const {removeTodoKey} = useContext(Context)

    const classes = []
    if (todo.completed) {
      classes.push('done')
    }

    return (
        <li style={styles.li}>
            <span className={classes.join(' ')}>
                <input 
                  type='checkbox' 
                  checked={todo.completed}
                  style={styles.input} 
                  onChange={() => onChange(todo.id)} 
                />

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
            <Modal todoModal={todo}/>  
            {/* <button className="rm">Delete</button>    */}
            <DeleteUser todo={todo}/>                
        </li>
    )
}


/* TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
  } */

export default TodoItem


//<button className="rm" onClick={ () => removeTodoKey(todo.id) }>Delete</button>        
