import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Detail from './components/Detail';
import Login from './components/Login';
import { MoviesProvider } from './components/Context';
function App() {
  return (
    <MoviesProvider>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path = "/" element={<Login />}  />
          <Route path ="/detail/:id" element={<Detail />} />
          <Route path = "/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MoviesProvider>
  );
}

export default App;

/* "Routes" is used in version 6 of react-router-dom  instead of "Switch"  */
