import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css";

function SidebarChat({id, chatName}) {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h3>{chatName}</h3>
                <p>Last message sent...</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat;
