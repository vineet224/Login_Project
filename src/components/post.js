import React, {Component, useState} from 'react' ;
import "../index.css";

function Post(props){

    return(

        <div>
            <div>
            <form onSubmit={props.handlePost}>
                <div>
                    <label className='lable'>Create Post</label>
                    <input type='text' placeholder='How are you feeling today?' value={props.newComment} onChange={props.handleCommentUpdate}/>
                </div>
                <div>
                    <input type="submit" value="Post"/>
                </div>
            </form>
            </div>
            <div className='PostTable'>
                <div>
                    <p>three dots</p>
                </div>   
                <div>
                    <div>
                    <p>img</p>
                    </div>
                    <p>text1</p>
                    <p>text2</p>
                </div>  
                <div>
                    <div>
                    <p>img</p>
                    </div>
                    <p>text2</p>
                </div>  
                <div>
                    <div>
                    <p>img</p>
                    </div>
                    <p>text2</p>
                </div>
            </div>
        </div>
    )
}
export default Post;