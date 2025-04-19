import { useState } from 'react'
import './App.css'
import Dashboard from './admin/Dashboard'
import Centers from './admin/Centers'
import Tutor from './admin/Tutors'
import Students from './admin/Students'
import Attendance from './admin/Attendance'

function App() {
  
  return (
    <>
      <Dashboard/>
      <Centers/>
      <Students/>
      <Tutor/>
      <Attendance/>
    </>
  )
}

export default App
