import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import HomePage from './HomePage'

const AppNavigator = () => {
  const []=useState()
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' Component={LoginPage} />
    <Route path='/register' Component={RegisterPage} />
    <Route path='/home' Component={HomePage}/>
  </Routes>
  </BrowserRouter>
  )
}

export default AppNavigator
