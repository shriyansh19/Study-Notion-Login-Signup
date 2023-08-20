import React from 'react'
import { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

export const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email:"", 
        password : "",
        confirmPassword : "",
        accountType : "student"
    })

    function changeHandler(event)
    {
        setFormData({
          ...formData,[ event.target.name ]: event.target.value
        })
    }

    const [showCreatePassword, setCreatePassword] = useState(false);
    const [showConfirmPassword, setConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function submitHandler(event)
    {
        event.preventDefault();
        if(formData.password != formData.confirmPassword)
        {
            toast.error("Passwords do not matched");
            return ;
        }

        setIsLoggedIn(true);

        toast.success("Account created Successfully");

        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");
    }

  return (
   <div className=''>
    
    <div
    className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
        className={`${accountType === "student" 
        ?
            "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={()=> setAccountType("student")}>
            Student
        </button>

        <button
        className={`${accountType === "instructor" 
        ?
            "bg-richblack-900 text-richblack-5"
        :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
        onClick={() => setAccountType("instructor")}>
            Instructor
        </button>
    </div>

    <form onSubmit={submitHandler}>

    {/* first name and last name  */}
        <div className='flex gap-x-4 mt-[20px]'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>

                <input 
                type="text"
                required
                value={formData.firstName} 
                onChange={changeHandler}
                placeholder='Enter First Name'
                name='firstName'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>

                <input 
                type="text"
                required
                value={formData.lastName} 
                onChange={changeHandler}
                placeholder='Enter Last Name'
                name='lastName'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        {/* Email */}
        <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                <input
                    required
                    type="email"
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email Address "
                    value={formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>
        </div>

        <div className='w-full flex gap-x-4 mt-[20px]'>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>

                <input 
                type= {showCreatePassword ? ("text") : ("password")}
                required
                value={formData.password} 
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                onClick={ () => setCreatePassword( (prev) => !prev)}>
                    {showCreatePassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
                
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>

                <input 
                type= {showConfirmPassword ? ("text") : ("password")}
                required
                value={formData.confirmPassword} 
                onChange={changeHandler}
                placeholder='Confirm Password'
                name='confirmPassword'
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />

                <span className='absolute right-3 top-[38px] cursor-pointer'
                 onClick={ () => setConfirmPassword( (prev) => !prev)}>
                    {showConfirmPassword ? 
                    (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) :
                    (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                    }
                </span>
            </label>
        </div>

        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-8'>
            Create Account
        </button>
    </form>

   </div>
  )
}
