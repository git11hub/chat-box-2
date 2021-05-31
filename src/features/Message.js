import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import "./Message.css"
import { selectUser } from './userSlice';

function Message({
    id, 
    contents: { timestamp, displayName, email, message, photo, uid },
}) {
    const user = useSelector(selectUser);

    return (
        <div className={`message ${user.email === email && "message_sender"}`}>
            <Avatar className="message_photo" src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
