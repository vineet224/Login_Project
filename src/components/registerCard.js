import React, {Component, useState} from 'react' ;
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';

function RegisterCard(){

    return(
       <div>
            <form>
                <div>
                    <label className='lable'>Email</label>
                    <input type='text' placeholder='Enter your email' />
                </div>
                <div>
                    <label className='lable'>Username</label>
                    <input type='text' placeholder='Enter your Username'/>
                </div>
                <div>
                    <label className='lable'>password</label>
                    <input type='text' placeholder='Enter your password'/>
                </div>
                <div>
                    <input type="submit" value="Register now"/>
                </div>
            </form>
            <div className='nav-bar'>
                   <h1>login</h1>
            </div>
        </div>
    )

    // return (
    //     <div>
    //         <h1>hello reg</h1>
    //     </div>
    // )
}
export default RegisterCard;