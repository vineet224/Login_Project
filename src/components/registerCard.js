import React, {Component, useState} from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import "../index.css";

function RegisterCard(props){

    return(
       <div>
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
                <div>
                    <input type="submit" value="Register now"/>
                </div>
            </form>
            <div className='nav-bar' onClick={props.changeToLogin}>
                   <h1>login</h1>
            </div>
        </div>
    )
}
export default RegisterCard;