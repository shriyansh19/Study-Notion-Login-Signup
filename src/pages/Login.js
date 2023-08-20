import React from 'react'
import loggingimage from "../assets/login.png"
import { Template } from '../components/Template'


export const Login = ({setIsLoggedIn}) => {
  return (
    <div>
        <Template
            title="Welcome Back"
            desc1 = "Build skills for today, tommorow, and beyond"
            desc2 = "Education to future-proof your carrer."
            image={loggingimage}
            formtype="login"
            setIsLoggedIn={setIsLoggedIn}
        />
    </div>
  )
}
