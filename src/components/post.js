import React, {Component, useState} from 'react' ;
import "../index.css";

function Post(props){

    return(

        <div className='border-4 border-blue-800'>
            <div>
                <form onSubmit={props.handlePost}>
                    <div>
                        <label className='lable'>Create Post</label>
                        <input type='text' placeholder='How are you feeling today?' value={props.newComment} onChange={props.handleCommentUpdate}/>
                    </div>
                    <div>
                        <input type="submit" value="Post" className='w-24 bg-gray-800 text-yellow-400 border-2 border-red-800 border-dotted'/>
                    </div>
                </form>
            </div>
            <div className='PostTable'>
                <div>
                    <p>three dots</p>
                </div>   
            </div>
        </div>
    )
}
export default Post;