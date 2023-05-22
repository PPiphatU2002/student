import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from './Register.js';
import Home from './Home.js';
import Class from './Class.js';
import Title from './Title.js';
import Correct from "./Correct.js";
import SignInSide from "./login.js";
import Admin from "./Admin.js";
import SubjectCreate from "./SubjectCreate.js";
import SubjectUpdate from "./SubjectUpdate.js";

function App() {
  return (
  <div>
  <Routes>
      <Route path='/Title' element={<Title />} />
      <Route path='/' element={<Title />} />
      <Route path='/Home' element={<Title />} />
      <Route path='/register' element={<Register />} />
      <Route path='/class' element={<Class />} />
      <Route path='/correct' element={<Correct />} />
      <Route path='/login' element={<SignInSide />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/SubjectUpdate' element={<SubjectUpdate />} />
      <Route path='/SubjectCreate' element={<SubjectCreate />} />
  </Routes>
  </div> 
  );
}

export default App;
