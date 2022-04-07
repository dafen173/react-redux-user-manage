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
import AddUserRedux from './AddUserRedux'
//import GoodsList from '../containers/GoodsList'
//import UserConnect from '../containers/UserConnect'
//import UserList333 from './UserList333'
//import { useDispatch } from "react-redux"
//import { addUsers } from "../action/addUsers"
//import UserListTwo from './UserListTwo'
import UserList444 from './UserList444'

import { Routes, Route, Link } from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { GroupsPage } from '../pages/GroupsPage'
import { PageNotFound } from '../pages/PageNotFound'
import { Layout } from './Layout'

function App() {
    // const [todos, setTodos] = useState([])
    // const [loading, setLoading] = useState(true)
    
    return (
        <>    
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<UsersPage />} />
              <Route path='groups' element={<GroupsPage />} />
              <Route path='*' element={<PageNotFound />} />
            </Route>        
          </Routes>

          {/* <div className="wrapper">         
            <h1>User Management</h1>  
            <UserList444 />
            <AddUserRedux />
            {loading && <Loader />}
            {todos.length ? (
              <TodoList todos={todos} onToggle={toggleTodo} />
            ) : (
              loading ? null : <p>No todos!!!</p>
            )}
            <React.Suspense fallback={<p>Loading...</p>}>
              {<AddTodo onCreate={addTodo}/>}
            </React.Suspense>         
          </div>  */}
        </>
    )
}

export default App;

