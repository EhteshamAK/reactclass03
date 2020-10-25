import React, {useState} from 'react';
import './App.css';
import ValueContext from './ValueContext.js';
import Parent from './Parent.js';
import numberReducer from  './NumberReducer.js';

function App() {
  let [value,setValue] = useState(100);
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
