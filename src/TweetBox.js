import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetbox'>
            <form>
                <div className='tweetBox_input'>
                <Avatar src='' />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
