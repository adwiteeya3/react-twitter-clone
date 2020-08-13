import React from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed"> 
           {/* Header */}
           <div className="feed_header">  
                <h2>Home</h2>
           </div> 
            
           {/* TweetBox */}
            <TweetBox />

           {/* Post */}
           <Post 
             displayName="Adwiteeya"
             username="adwiteeya6"
             verified= {true}
             text="Whola!" 
             avatar= "https://images.unsplash.com/photo-1597011769896-d355e2afcbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80"
             image= "https://player.vimeo.com/video/288484037?title=0&portrait=0&byline=0&autoplay=1"
            />
           

        </div>
    );
}

export default Feed;
