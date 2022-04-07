import React, {useContext} from "react"
import PropTypes from "prop-types"
//import Context from '../context'
import Modal from '../component/EditUserModal'
import DeleteUser from "../component/DeleteUser"
import EditUserRedux from '../component/EditUserRedux'
import DeleteGroup from './DeleteGroup'
import { EditGroup } from "./EditGroup"

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

export const GroupItem = ( {group, index} ) => {
    // const classes = []
    // if (group.completed) {
    //   classes.push('done')
    // }

    return (
        <li style={styles.li}>
            <span>               
                <strong>{index + 1}</strong>
                &nbsp;
                &nbsp;
                &nbsp;
                {group.groupname}  
                &nbsp;
                &nbsp;
                &nbsp;
                {group.groupdescription} 
            </span>   

            <div>
              <EditGroup group={group}/>
              <DeleteGroup group={group}/>  
            </div>                    
        </li>
    )
}

/* TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
  } */

   
