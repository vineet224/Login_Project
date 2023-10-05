import React, {Component, useState} from 'react' ;
import { Link } from 'react-router-dom';
import "../index.css";

function LoginCard(props){

    return(
        <div className='border-1 border-gray-400 w-96 bg-gray-700 p-8' >
            <div>
                <div className='flex flex-col items-center justify-center text-center'>
                    <div className='text-gray-400 z-50'>
                        <h5>Welcome Back</h5>
                    </div>
                    <div className='text-white z-50'>
                        <h2>Log into your account</h2>
                    </div>
                </div>
                <form onSubmit={props.onLogin}>
                    <div>
                        <label className='text-gray-400 block'>Email or Username</label>
                        <input type='text' placeholder='Enter your email or username' value={props.name} onChange={props.handleNameChange} className='w-full text-gray-400 bg-gray-700 border-2 border-gray-400'/>
                    </div>
                    <div>
                        <div className='flex justify-between'>
                            <label className='text-gray-400 block'>password</label>
                            <button className='text-gray-400 block'>Forgot Password</button>
                        </div>
                        <input type='text' placeholder='Enter your password' value={props.password} onChange={props.handlePasswordChange} className='w-full text-gray-400 bg-gray-700 border-2 border-gray-400'/>
                    </div>
                        <div className='bg-blue-600 block text-center'>
                            <input type="submit" value="Login now" className='text-white bg-blue-600'/>
                        </div>
                    <div className='border-2 border-green-600 m-4' >
                        <button onClick={props.changeToRegister}>Login Here</button>
                    </div>  
                </form>
            </div>
        </div>
    )
}
export default LoginCard;