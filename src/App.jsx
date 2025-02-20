import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Test commit to force changes

import * as React from "react";
function getTitle(title){
  return title;
}
function App (){   
  return (
    <div>
      <h1>hello {getTitle("React")}</h1>
      <label htmlFor="search"></label>
      <input id="search" type="text" />
    </div>
  );
}
export default App
