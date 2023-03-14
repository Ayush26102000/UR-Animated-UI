import React from 'react';
import './App.css';

import Background from './Screens/Background'
import Buttons from './Screens/Buttons'
import Checkbox from './Screens/Checkbox'
import RadioButton from './Screens/RadioButton'
import Search from './Screens/Search'
import ToggleButton from './Screens/ToggleButton'
import Textfield from './Screens/Textfield'
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Background />} />
        <Route exact path="/Buttons" element={<Buttons/>} />
        <Route exact path="/Checkbox" element={<Checkbox/>} />
        <Route exact path="/ToggleButton" element={<ToggleButton/>} />
        <Route exact path="/RadioButton" element={<RadioButton/>} />
        <Route exact path="/Textfield" element={<Textfield/>} />
        <Route exact path="/Search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
