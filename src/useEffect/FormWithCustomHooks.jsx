import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onCleanForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
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
        <input onChange={onInputChange} type="password" className="form-control mt-2" placeholder="Password" name="password" value={password} />
        <button className="btn btn-primary mt-2" onClick={onCleanForm}>Clean</button>
    </>   
  )
}
