import React, { useActionState } from 'react'

function EmailFormBefore2() {

    const handleSubmit = async (prevData , formData) =>{
        let email = formData.get("email");
        let password = formData.get("password")

        await new Promise((res) => setTimeout(res , 2000))
        console.log(name , password);

        if(email && password){
            return {message : "Submitted successfully" , email , password}
        }
        else{
            return {error : "error while fetching data" , email , password}
        }
        

    }

    const [data , action , pending] = useActionState(handleSubmit , null)
  return (
    <>
        <form action={action}>
            <input type="email" placeholder='Enter email' name='email' />
            <br/> <br/>
            <input type="password" placeholder='Enter Password' name='password' />
            <br/> <br/>
            <button>Submit</button>
        </form>

        {data?.error && <span style={{color : "red"}}>{data.error}</span>}
        {data?.message && <span style={{color :" green"}}>{data.message}</span>}

        <h3>Email : {data?.email}</h3>
        <h3>Password : {data?.password}</h3>
    </>
  )
}

export default EmailFormBefore2