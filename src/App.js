import React from 'react';
import { Route } from "react-router-dom";
import Nav from './Nav/Nav'
import Explanation from './Explanation/Explanation';
import './App.css'


function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main className='App'>
        <Route exact path='/' component={Explanation} />
      </main>
    </div>
  );
}

export default App;
