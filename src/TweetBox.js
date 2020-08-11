import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                <Avatar src='https://images.unsplash.com/photo-1596921580631-c491e33e2e37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80' />
                <input placeholder="What's happening?" type='text'></input>
                {/* <input placeholder="Enter image URL" type='text'></input> */}
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
