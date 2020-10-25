import React, { useContext, useReducer} from 'react';
import ValueContext from './ValueContext.js';
import numberReducer from  './NumberReducer.js';

function Child2() {
    let value = useContext(ValueContext);
    let [state, dispatch] = useReducer(numberReducer, 50);
  return (
  <div>
     Child 2 
     <br/>
     Use Reducer value is {state}
     <br/>
     <button onClick={()=>{dispatch({type:'INCREAMENT'})}}> increment</button>
     <br/>
     <button onClick={()=>{dispatch({type:'DECREMENT'})}}> Decrement</button>

  </div>
  );
}

export default Child2;
