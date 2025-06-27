import React, { useReducer } from "react";

const initialState = {count : 0}

const reducer = (state , action)=>{
    switch(action.type){
        case "INCREMENT":
            return  {count : state.count  + 1}
        
        case "DECREMENT":
            return {count : state.count - 1}

        case "RESET":
            return {count : 0}

        default:
            return state;
    }
}

const Counter = () => {
    const [state , dispatch] = useReducer(reducer , initialState);

  return (
    <>
        <h2>Count : {state.count}</h2>
        <button onClick={()=> dispatch({type : "INCREMENT"})}>+1</button>
        <button onClick={() => dispatch({type : "DECREMENT"})}>-1</button>
        <button onClick={()=>dispatch({type : "RESET"})}>RESET</button>
    </>
  );
};

export default Counter;
