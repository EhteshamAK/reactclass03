import React,{ useReducer} from 'react';
import Child2 from './Child2.js';
import numberReducer from './NumberReducer.js';

function Child() {
  let [state, dispatch]= useReducer(numberReducer,49)
  return (
  <div>
      Child
      We are in child 1 {state}
      <br/>
      <button onClick={()=>{dispatch({type:'INCREAMENT'})}}>up</button>
      <br/>
      <button onClick={()=>{dispatch({type:'DECREMENT'})}}>down</button>

    <Child2/>
  </div>
  );
}

export default Child;
