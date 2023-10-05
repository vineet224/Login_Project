import React, {Component, useState} from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import "../index.css";

function RegisterCard(props){

    return(
        <div className='border-8 border-blue-800'>
            <div className='w-96 h-96 border-8 border-red-800'>
                <form onSubmit={props.onRegistration}>
                    <div>
                        <label className='lable'>Email</label>
                        <input type='text' placeholder='Enter your email' value={props.email} onChange={props.handleEmailChange}/>
                    </div>
                    <div>
                        <label className='lable'>Username</label>
                        <input type='text' placeholder='Enter your Username' value={props.name} onChange={props.handleNameChange} />
                    </div>
                    <div>
                        <label className='lable'>password</label>
                        <input type='text' placeholder='Enter your password' value={props.password} onChange={props.handlePasswordChange}/>
                    </div>
                    <div className='w-36 border-4 border-green-600'>
                        <input type="submit" value="Register now"/>
                    </div>
                </form>
                <div className='w-36 border-4 border-green-600'>
                    <button onClick={props.changeToLogin}>Register</button>
                </div>
            </div>
        </div>
       
    )
}
export default RegisterCard;