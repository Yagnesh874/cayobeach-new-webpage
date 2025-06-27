import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
  
    const handleSubmit = async () =>{
       await  new Promise(res => setTimeout(res , 2000))
    }

    const CustomForm = () =>{
        const {pending} = useFormStatus();
        return(
            <>
                <input type="email" placeholder='Enter Email' />
                <br/><br/>
                <input type="password" placeholder='Enter Password' />
                <br/><br/>
                <button disabled={pending}>{pending?"Submitting.." : "Submit "}</button>
                <h3>{pending ? "signup"  :"login"}</h3>
            </>
        )
    }
  return (
    <>
        <form action={handleSubmit}>
        <CustomForm/>
        </form>
    
    </>
  )
}

export default SubmitButton