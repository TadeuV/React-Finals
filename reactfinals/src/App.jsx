import { useState } from 'react'
import React from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'
import ItemForm from './assets/components/ItemForm'
import ItemTable from './assets/components/ItemTable'
import {Route,Routes, BrowserRouter} from "react-router-dom"


export default function App() {
  const [itemId,setItemId] = useState(null)

  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemTable setItemId={setItemId}/>}/>
          <Route exact path='/form' element={<ItemForm itemId={itemId} setItemId={setItemId}/> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}




