// return(
    //     <div className="Login">
    //         <form onSubmit={props.loginHandler}>
    //             <label>Welcome Back</label>
    //             <label>Logon Into Your Account</label>
    //             <div className="InputClass">
    //                 <label>Username</label>
    //                 <input type="text"/>
    //             </div>
    //             <div className="InputClass">
    //                 <label>Password</label>
    //                 <input type="text"/>
    //             </div>
    //         </form>
    //     </div>
    // )


<div>
                <LoginCard onLogin={onLogin} changeToRegister={changeToRegister} name={name} password={password} 
                handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}/>
                {isRegisterModelOpen && <RegisterCard onRegistration={onRegistration} changeToLogin={changeToLogin} name={name} 
                password={password} email={email} handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} 
                handlePasswordChange={handlePasswordChange}/>}
            </div>
            {(!isloginModelOpen && !isRegisterModelOpen) && <Posts name={name} email={email} password={password} 
            handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}
            onLogin={onLogin} onRegistration={onRegistration} changeToLogin={changeToLogin} changeToRegister={changeToRegister}/>}