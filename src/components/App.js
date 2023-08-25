import React, {Component, useState} from 'react' ;
import LoginCard from './LoginCard';
import RegisterCard from './registerCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';


function App(){

    const [name ,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    
    const [isloginModelOpen, setIsLoginModelOpen ] = useState(true);
    const [isRegisterModelOpen, setIsRegisterModelOpen ] = useState(false);

    function changeToLogin(event){
        setIsLoginModelOpen(true);
        setIsRegisterModelOpen(false);
    }

    function changeToRegister(event){
        
        setIsLoginModelOpen(false);
        setIsRegisterModelOpen(true);
    }

    function onRegistration(event){
        alert("here in change to register");
        setIsLoginModelOpen(false);
        setIsRegisterModelOpen(false);
    }

    function onLogin(event){
        setIsLoginModelOpen(false);
        setIsRegisterModelOpen(false);
    }

    function handleNameChange(event) {
        //this.setState({value: event.target.value});
        setName(event.target.value)
    }

    function handleEmailChange(event) {
        //this.setState({value: event.target.value});
        setEmail(event.target.value)
    }

    function handlePasswordChange(event) {
        //this.setState({value: event.target.value});
        setPassword(event.target.value)
    }

    return (
        <div>
            <div>
                {isloginModelOpen && <LoginCard onLogin={onLogin} changeToRegister={changeToRegister} name={name} password={password} 
                handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}/>}

                {isRegisterModelOpen && <RegisterCard onRegistration={onRegistration} changeToLogin={changeToLogin} name={name} 
                password={password} email={email} handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} 
                handlePasswordChange={handlePasswordChange} onLogin={onLogin}/>}
            </div>
            {(!isloginModelOpen && !isRegisterModelOpen) && <Posts name={name} email={email} password={password} 
            isloginModelOpen={isloginModelOpen} isRegisterModelOpen={isRegisterModelOpen}
            handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}
            onLogin={onLogin} onRegistration={onRegistration} changeToLogin={changeToLogin} changeToRegister={changeToRegister}/>}
        </div>
    )
}
export default App;