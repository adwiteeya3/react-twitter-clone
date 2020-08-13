import React, { useState, useEffect } from 'react';
import "./Feed.css";
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       db.collection('posts').onSnapshot(snapshot => (
           setPosts(snapshot.docs.map(doc => doc.data()))
       ))
    }, []);


    return (
        <div className="feed"> 
           {/* Header */}
           <div className="feed_header">  
                <h2>Home</h2>
           </div> 
            
           {/* TweetBox */}
            <TweetBox />

           {/* Post */}
           {posts.map(post => 
            
            )}
           <Post 
             displayName="Adwiteeya"
             username="adwiteeya6"
             verified= {true}
             text="Whola!" 
             avatar= "https://images.unsplash.com/photo-1597011769896-d355e2afcbab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80"
             image= "https://images.unsplash.com/photo-1596975272437-6b6e80eb2891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
           

        </div>
    );
}

export default Feed;
