import logo from './logo.svg';
import './App.css';
import React from 'react'
import Todo from './components/assets/Todo';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <React.Fragment>

      {/* <Routes>
        <Route path='/' element={<Todo/>}/>
      </Routes> */}
      <Todo/>
    </React.Fragment>
  );
}

export default App;
