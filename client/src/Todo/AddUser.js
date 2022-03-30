import React, {useState} from "react"
import PropTypes, { func } from 'prop-types'


function AddUser ({handler}) {
    const [userInput, setUserInput] = useState('yooooo')
    const [groupSelect, setGroupSelect] = useState('')

    function userHandler (event) {
        setUserInput(event.target.value)

        console.log(event.target.value)
    }

    function groupHandler (event) {
        setGroupSelect(event.target.value)

        console.log(event.target.value)
    }

    function submitHandler (event) {
        event.preventDefault()

        fetch('http://localhost:8080/api/manage-user', {
            method: 'POST',      
            body: JSON.stringify({
            username: userInput, 
            groupname: groupSelect,
            created: new Date().toLocaleDateString()
            }),
            headers: {
            'Content-Type': 'application/json'
            }
        })
        /* .then(response => response.json())
        .then(todosFromServer => {
            setTodos(todosFromServer)
            setLoading(false)             
        }) */
    }
    
    return (
        <form onSubmit={submitHandler}> 
            <input value={userInput} onChange={userHandler}/>
            <select onChange={groupHandler}> 
                <option value='oasis'>oasis777</option>
                <option value="slipknot">slipknot777</option>
                <option value="soad">soad777</option>  
                <option value="korn">korn777</option>
            </select>
            <button type="submit">Add User</button>
        </form>
    )
}



export default AddUser


