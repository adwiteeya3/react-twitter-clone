import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOption from './SidebarOption';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/* Twitter icon */}
            <TwitterIcon />
            {/* SidebarOption */}
            <SidebarOption Icon={HomeIcon} text="Home"/>
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            {/* SidebarOption */}
            {/* SidebarOption */}
            {/* SidebarOption */}

            {/* Button -> Tweet */}
            
        </div>
    );
}

export default Sidebar;
