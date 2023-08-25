import React, {Component, useState} from 'react' ;
import { Link } from 'react-router-dom';

function LoginCard(props){

    return(
       <div>
            <form onSubmit={props.onLogin}>
                <div>
                    <label className='lable'>Username</label>
                    <input type='text' placeholder='Enter your email or username' value={props.name} onChange={props.handleNameChange}/>
                </div>
                <div>
                    <label className='lable'>password</label>
                    <input type='text' placeholder='Enter your password' value={props.password} onChange={props.handlePasswordChange}/>
                </div>
                <div>
                    <input type="submit" value="Login now"/>
                </div>
                <div className='nav-bar' onClick={props.changeToRegister}>
                    <h1>register here</h1>
                </div>
            </form>
        </div>
    )
}
export default LoginCard;