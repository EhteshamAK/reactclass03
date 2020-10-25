import React, {useState} from 'react';
import './App.css';
import ValueContext from './ValueContext.js';
import Parent from './Parent.js';

function App() {
  return (
    <ValueContext.Provider value={value}>
     <div>
      App
      <Parent/>
      </div>  
     </ValueContext.Provider>

  );
}

export default App;
