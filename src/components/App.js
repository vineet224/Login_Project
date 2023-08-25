import React, {Component, useState} from 'react' ;
import LoginCard from './LoginCard';
import RegisterCard from './registerCard';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './Posts';


function App(){

    const [name ,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    
    const [isloginModelOpen, setIsLoginModelOpen ] = useState('');
    const [isRegisterModelOpen, setIsRegisterModelOpen ] = useState('');

    // useEffect(()=>{
    //     const setIsLoginModelOpen = ()=>{
         
    //       setIsLoginModelOpen(true)
    //     }
    //     setIsLoginModelOpen()
    //   },[])

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


    //   return (
    //     <Router>
    //         <div>
    //             <Routes>
    //                 <Route exact path='/' element={<LoginCard name={name} password={password} 
    //                 handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} 
    //                 handleSubmit={handleSubmit} handlePasswordChange={handlePasswordChange}/>} />

    //                 <Route path='/register' element={<RegisterCard name={name} password={password} email={email}
    //                 handleNameChange={handleNameChange} handleEmailChange={handleEmailChange} 
    //                 handleSubmit={handleSubmit} handlePasswordChange={handlePasswordChange} />} />

    //                 <Route path='/home' element={Posts}/>
    //             </Routes>
    //         </div>
    //     </Router>
    //   )

    // return(
    //     <div className='App'>
    //             <LoginCard onLogin={onLogin} changeToRegister={changeToRegister} name={name} password={password} 
    //             handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}/>
    //     </div>
    // )

    return (
        <div>
            <RegisterCard />
        </div>
    )
}
export default App;