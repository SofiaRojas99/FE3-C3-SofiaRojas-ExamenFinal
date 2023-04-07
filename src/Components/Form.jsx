import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(user.fullName.length > 1 && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email)){
        setShow(true)
        setErr(false)
    } else {
        setShow(false)
        setErr(true)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
            <input role= "text" required type="text" name = "name" value={user.fullName} placeholder = "Full Name" onChange={(e) => setUser({...user, fullName: e.target.value})}/>
            <input  role= "email" required type="email" name = "email" value={user.email} placeholder  ="Email" onChange={(e) => setUser({...user, email: e.target.value})}/>
            <button  role = "button" type='submit'>Send</button>
      </form>
      {err && <p className='error'>Por favor verifique su información nuevamente.</p>}
      {show && <p className='message'>Gracias {user.fullName}, te contactaremos cuanto antes vía mail.</p>}
    </>
  );
};

export default Form;
