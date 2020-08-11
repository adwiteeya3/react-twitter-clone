import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";

function Post({ displayName, username, verified, timestamp, text, image, avatar }) {
    return (
        <div className='post'> 
            <div className='post_avatar'>
                <Avatar src='https://images.unsplash.com/photo-1596910134699-db9bf7109b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3068&q=80' />
            </div>
        </div>
    )
}

export default Post
