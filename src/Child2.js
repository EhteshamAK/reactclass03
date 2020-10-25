import React, { useReducer} from 'react';
import numberReducer from  './NumberReducer.js';

function Child2() {
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
