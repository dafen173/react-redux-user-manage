import React, {useEffect, useSelector, useState} from 'react'
//import { useDispatch } from 'react-redux'
//import { getUsers } from '../action/getUsers'
//import {useState} from 'react'
//import TodoList from '../Todo/TodoList'
//import Context from '../context'
//import AddTodo from './Todo/AddTodo'
//import Loader from '../Loader'
//import Modal from './Modal/Modal'
//import AddUserTwo from '../Todo/AddUserTwo'
//import AddUserRedux from '../Todo/AddUserRedux'
//import GoodsList from '../containers/GoodsList'
//import UserConnect from '../containers/UserConnect'
import UserList333 from './UserList333'
//import { useDispatch } from "react-redux"
//import { addUsers } from "../action/addUsers"
//import UserListTwo from './UserListTwo'
import UserList444 from './UserList444'



//const AddTodo = React.lazy( () => import('../Todo/AddTodo') )

function App() {
    // const [todos, setTodos] = useState([])
    // const [loading, setLoading] = useState(true)
    
    
    // http://localhost:8080/api/manage-user
    

    /* useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(todosFromServer => {
        setTimeout(() => {
          setTodos(todosFromServer)
          setLoading(false)
        }, 2000)       
      })
    }, []) 
 */

 /* useEffect(() => {
      fetch('http://localhost:8080/api/user/1')
      .then(response => response.json())
      .then(todosFromServer => {
        setTimeout(() => {
          setTodos(todosFromServer)
          setLoading(false)
        }, 2000)       
      })
  }, []) */
  


 //================================================================ 
//GET MANAGE USERS FRONTEND
  //   useEffect(() => {
  //     fetch('http://localhost:8080/api/manage-user')
  //     .then(response => response.json())
  //     .then(todosFromServer => {
  //       setTimeout(() => {
  //         setTodos(todosFromServer)
  //         setLoading(false)
  //       }, 1000)       
  //     })
  // }, [])
//======================================================================



  // DELETE MANAGE USER FRONTEND
    /* useEffect(() => {
      fetch('http://localhost:8080/api/manage-user/12', {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(todosFromServer => {
        setTimeout(() => {
          setTodos(todosFromServer)
          setLoading(false)
        }, 500)       
      })
  }, []) */



//GET USERS
    /* useEffect(() => {
      fetch('http://localhost:8080/api/user', {
        method: 'GET'    
      })
    }, [])  */


//GET ONE USER
  /* useEffect(() => {
      fetch('http://localhost:8080/api/user/6', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, [])   */


// UPDATE USER
    /* useEffect(() => {
      fetch('http://localhost:8080/api/user', {
        method: 'PUT',      
        body: JSON.stringify({id:3, name: 'pat', surname:'smir'}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, []) */

// DELETE USER
    /* useEffect(() => {
      fetch('http://localhost:8080/api/user/3', {
        method: 'DELETE'
      })
    }, [])  */

    
//CREATE POST
/* useEffect(() => {
      fetch('http://localhost:8080/api/post', {
        method: 'POST',      
        body: JSON.stringify({title: 'Lithium', content: 'i am so happy...', userId: 1}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, []) */

//GET POSTS BY USER
// В адресную строку вводим user_id юзера, посты которого хотим посмотреть
  /* useEffect(() => {
      fetch('http://localhost:8080/api/post?id=1', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }, [])   */


//=======================================================================================================

    // function toggleTodo (id) {
    //   setTodos (
    //     todos.map( todo => {
    //       if (todo.id === id) {
    //         todo.completed = !todo.completed
    //       }
    //       return todo
    //     })
    //   )
    // }

    // function removeTodo(id){
    //   fetch(`http://localhost:8080/api/manage-user/${id}`, {
    //     method: 'DELETE'
    //   })   
         
    //   setTodos(todos.filter( todo => todo.id !== id))
    // }
    
    // function getFromHandler (userFromHandler, groupFromHandler) {
    //   /* console.log(userFromHandler)
    //   console.log(groupFromHandler) */

    //   fetch('http://localhost:8080/api/manage-user', {
    //             method: 'POST',      
    //             body: JSON.stringify({
    //             username: userFromHandler, 
    //             groupname: groupFromHandler,
    //             created: new Date().toLocaleDateString()
    //             }),
    //             headers: {
    //             'Content-Type': 'application/json'
    //             }
    //         })
    //         .then(response => response.json())
    //         .then(todosFromServer => {
    //             setTodos(todosFromServer)
    //             setLoading(false)             
    //         })
    // }
     
    // const dispatchUsers = useDispatch()

    // useEffect(() => {
    //   dispatchUsers(getUsers())
    //   console.log('get users!!!!!!!!!')
    // }, [])

    
    return (
          <div className="wrapper">         
            <h1>User Management</h1>  

            <UserList444 />


            {/* <UserList333 /> */}
         
            {/* <UserConnect /> */}

            {/* <AddUserRedux /> */}


            {/* <AddUserTwo handler={getFromHandler} /> */}
            
            {/* <GoodsList /> */}
            

            {/* {loading && <Loader />} */}


            {/* {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} />
            ) : (
              loading ? null : <p>No todos!!!</p>
            )} */}

            {/* <React.Suspense fallback={<p>Loading...</p>}>
              {<AddTodo onCreate={addTodo}/>}
            </React.Suspense> */}

            
          </div>
                 
                 

        /* <Context.Provider value={{ 
          removeTodoKey: removeTodo
          }}> */

        /* </Context.Provider> */
      
      
    )
}

export default App;

