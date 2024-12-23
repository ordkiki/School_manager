import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'

import Dashboard from "./views/Dashboard";
import { useEffect, useState } from "react";
import Signin from "./components/Auth/Signin";
import Login from "./components/Auth/Login";
import Load from "./components/Loader/Load";
import Adduser from "./components/Students/adduser.component";
import Student from "./views/Student";

function App() {
  const [isload, SetLoad] = useState(true)

  useEffect(()=>
  {

    setTimeout(() => {
      SetLoad(false);      
    }, 200);
  },[])
  if (isload === true)
  {
    return <Load></Load>
  } 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  exact path="/Sign" element={<Signin/>}/>
          <Route index exact path="/Login" element={<Login/>}/>
          <Route  exact path="/Dashboard" element={<Dashboard/>}/>
          <Route  exact path="/eleves" element={<Student/>}/>
          {/* <Route  exact path="/add/users" element={<Dashboard/>}/> */}
          <Route  exact path="/add/users" element={<Adduser/>}/>
          <Route  exact path="/" element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
