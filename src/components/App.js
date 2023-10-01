import React, {Component, useState} from 'react' ;
import LoginCard from './LoginCard';
import RegisterCard from './registerCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';
import '../index.css';


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

//     return (<h1 class= "font-thin underline">
//     Hello world!
//   </h1>)

    // return (
    // <div class="pt-6 text-center space-y-4">
    //   <blockquote>
    //     <p class="text-lg font-serif underline">
    //       “Tailwind CSS is the only framework that I've seen scale
    //       on large teams. It’s easy to customize, adapts to any design,
    //       and the build size is tiny.”
    //     </p>
    //   </blockquote>
    //   <figcaption class="font-medium">
    //     <div class="text-sky-500 dark:text-sky-400">
    //       Sarah Dayan
    //     </div>
    //     <div class="text-slate-700 dark:text-slate-500">
    //       Staff Engineer, Algolia
    //     </div>
    //   </figcaption>
    // </div>)
  
    // return(<div>
    //     <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt=''/>
    // </div>)
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