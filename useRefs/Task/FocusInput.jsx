import React, { useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef(null);

    const handleFocus = () =>{
        inputRef.current.focus()
    }
  return (
    <div style={{padding : "20px"}}>
           <h2>Focus the Input using useRef</h2>
           <input type="text" ref={inputRef} placeholder='Click button to focus me' /><br/>
           <br/>
           <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusInput