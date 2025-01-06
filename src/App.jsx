import React from "react"
import DataTableComponent from "./components/data_table.jsx"
import { Route, Routes } from "react-router-dom"
import Home from "./pagess.jsx/home.jsx"
import Login from "./pagess.jsx/login.jsx"
import Signup from "./pagess.jsx/signup.jsx"
import Layout from "./components/layout.jsx"
import ProtectedRoute from "./components/protectedroute.jsx"

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/data-table" 
            element={
              <ProtectedRoute>
                <DataTableComponent />
              </ProtectedRoute>
              }
            />
          <Route path="*" element={<div>Page Not Found</div>} />  
        </Route>
      </Routes>
  )
}

export default App
