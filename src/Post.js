import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { Avatar, Button } from '@material-ui/core';

function Post({ displayName, username, verified, timestamp, text, image, avatar }) {
    return (
        <div className='post'> 
            <div className='post_avatar'>
                <Avatar src='https://images.unsplash.com/photo-1596910134699-db9bf7109b31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3068&q=80' />
            </div>
            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                        <h3>
                            Adwiteeya{" "}
                             <span>
                                 <VerifiedUserIcon className='post_badge' /> @adwiteeya3 
                             </span>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>my first twitter post</p>
                    </div>
                </div>
                <img src='https://media.giphy.com/media/OhFuOJn2rbLsA/giphy.gif' alt='' />
            </div>

        </div>
    )
}

export default Post
