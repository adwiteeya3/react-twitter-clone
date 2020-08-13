import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
    return (
        <div className='widgets'>
            <div className='widgets_input'>
                <SearchIcon className='widgets_searchIcon' />
                <input placeholder='Search Twitter' type='text' />
            </div>

            <div className='widgets_widgetContainer'>
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1293145433741471744"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="adwiteeya6"
                    options= {{ height: 400 }}
                />

                <TwitterShareButton 
                    url={'https://github.com/adwiteeya3'}
                    options={{ text: "#dive into my learning experience", via: "adwiteeya6"}}
                />
            </div>
        </div>
    )
}

export default Widgets
