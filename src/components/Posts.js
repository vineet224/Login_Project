import React, {Component, useState} from 'react' ;
import Post from './post';
import RegisterCard from './registerCard';
import LoginCard from './LoginCard';
import "../index.css";


const defaultPosts = [
    {
        name: "Theresa Webb",
        createdAt: new Date(),
        imageUrl: "",
        message: "Hello firends theresa here.",
        comments: [1,2,3,4,5,6],
        edited: false
    },
    {
        name: "Marvin Mickenny",
        createdAt: new Date(),
        imageUrl: "",
        message: "Hello firends theresa here.",
        comments: [1,2,3,4,5,6,7,8,9,0,1,2,3,4],
        edited: true
    }
 ]


function Posts(props){

    const [posts, setPosts] = useState(defaultPosts);
    const [newComment, setNewComment] = useState([]);

    const [isloginModelOpen, setIsLoginModelOpen ] = useState(false);
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

    // const appClass = `Posts ${(props.isloginModelOpen || props.isRegisterModelOpen) ? 'blur' : ''}`;

    function handleCommentUpdate(event) {
        setNewComment(event.target.value);
    }

    function handlePost(event) {
        alert('in post ');
        setIsLoginModelOpen(true);
        setIsRegisterModelOpen(false);
        event.preventDefault();
    }

    return (
        <div className="border-4 rounded-md border-blue-600">
            <div className= {` ${ isloginModelOpen || isRegisterModelOpen ? 'blur-sm': ''}`} >
                <h1>Hello {props.name}</h1>
                <Post posts={posts} name={props.name} handleCommentUpdate={handleCommentUpdate} handlePost={handlePost} newComment={newComment}/>
            </div>
            <div>
                {(isloginModelOpen || isRegisterModelOpen) && (
                    <>
                        <div style={{ pointerEvents: isloginModelOpen || isRegisterModelOpen ? 'none' : 'auto' }}>
                            <h1>hohohohohohohohohoh</h1>
                        </div>
                        <div className={` bg-gray-400 border-8 border-green-800 ${isloginModelOpen || isRegisterModelOpen ? 'z-50' : ''}`}>
                            <div>
                                {isloginModelOpen && <LoginCard onLogin={onLogin} changeToRegister={changeToRegister} name={props.name} password={props.password} handleNameChange={props.handleNameChange} handlePasswordChange={props.handlePasswordChange}/>}
                                {isRegisterModelOpen && <RegisterCard onRegistration={onRegistration} changeToLogin={changeToLogin} name={props.name} email={props.email} handleEmailChange={props.handleEmailChange} password={props.password} handleNameChange={props.handleNameChange} handlePasswordChange={props.handlePasswordChange}/>}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );

    // return(
    //     <div className="border-4 rounded-md border-blue-600">
    //         <div>
    //             <h1>Hello {props.name}</h1>
    //             <Post posts={posts} name={props.name} handleCommentUpdate={handleCommentUpdate} handlePost={handlePost} newComment={newComment}/>
    //         </div>
    //         <div>
    //             {(isloginModelOpen || isRegisterModelOpen) && (
    //                 <>
    //                 <div> <h1>hohohohohohohohohoh</h1></div>
    //                 <div className="bg-gray-400 border-8 border-green-800 z-100 ">
    //                         <div>
    //                             {isloginModelOpen && <LoginCard onLogin={onLogin} changeToRegister={changeToRegister} name={props.name} 
    //                             password={props.password} handleNameChange={props.handleNameChange} handlePasswordChange={props.handlePasswordChange}/>}
    //                             {isRegisterModelOpen && <RegisterCard onRegistration={onRegistration} changeToLogin={changeToLogin} 
    //                             name={props.name} email={props.email} handleEmailChange={props.handleEmailChange}
    //                             password={props.password} handleNameChange={props.handleNameChange} handlePasswordChange={props.handlePasswordChange}/>}
    //                         </div>
    //                 </div>
    //                 </>
    //             )}
    //         </div>
           
    //     </div>
    // )
}
export default Posts;