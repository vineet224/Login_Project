import React, {Component, useState} from 'react' ;
import Post from './post';
import RegisterCard from './registerCard';
import LoginCard from './LoginCard';
import '../css/posts.css'


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

    const appClass = `Posts ${(props.isloginModelOpen || props.isRegisterModelOpen) ? 'blur' : ''}`;

    function handleCommentUpdate(event) {
        //this.setState({value: event.target.value});
        alert('on new comment ');
        setNewComment(event.target.value);
    }

    function handlePost(event) {
        alert('in post ');
        setLoginModelOpen(true);
        setIsRegisterModelOpen(false);
        event.preventDefault();
    }

    return(
        <div className={appClass}>
            <div>
                <h1>Hello {props.name}</h1>
                <Post posts={posts} name={props.name} handleCommentUpdate={handleCommentUpdate} handlePost={handlePost} />
            </div>
            <div>
                {props.isloginModelOpen && <LoginCard onLogin={props.onLogin} changeToRegister={props.changeToRegister} name={props.name} 
                password={props.password} handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}/>}
                {props.isRegisterModelOpen && <RegisterCard onRegistration={props.onRegistration} changeToLogin={props.changeToLogin} 
                name={props.name} email={props.email} handleEmailChange={props.handleEmailChange}
                password={props.password} handleNameChange={handleNameChange} handlePasswordChange={handlePasswordChange}/>}
            </div>
        </div>
    )
}
export default Posts;