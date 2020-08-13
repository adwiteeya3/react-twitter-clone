import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = (e) => {
        e.preventDefault();
        
        db.collection("posts").add({
            displayName: 'Adwiteeya',
            username: 'adwiteeya6',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://images.unsplash.com/photo-1596883504669-8e45bfaac430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
            });
        
            setTweetMessage("");
            setTweetImage("");
          };


    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src='https://images.unsplash.com/photo-1596921580631-c491e33e2e37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=4350&q=80' />
                    <input 
                      onChange={(e) => setTweetMessage(e.target.value)}
                      value={tweetMessage} 
                      placeholder="What's happening?" 
                      type='text'>
                    </input>
                </div>

                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox_imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button onClick={sendTweet} type="submit" className='tweetBox_tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
