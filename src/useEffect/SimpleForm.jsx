import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'carlos',
    email: 'carlos@outlook.com'
  });
  
  const { username, email } = formState;
  

const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
        ...formState,
        [ name ] : value
    })
}

useEffect(() => {
    console.log('Form Changed')
}, [formState]);


useEffect(() => {
    console.log('Email Changed')
}, [email]);

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input onChange={onInputChange} type="text" className="form-control" placeholder="Username" name="username"  value={username}/>
        <input onChange={onInputChange} type="email" className="form-control mt-2" placeholder="email@email.com" name="email" value={email} />
    </>   
  )
}
