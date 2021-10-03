import React, { useState, useEffect } from 'react';
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({onClick, active, data}) => {

    const [time, setTime] = useState('');

    useEffect(() => {
        if(data.lastMessageDate > 0){
            let d = new Date(data.lastMessageDate.seconds  * 1000);

            let h = d.getHours();
            let m = d.getMinutes();

            h = h < 10 ? '0'+h : h;
            m = m < 10 ? '0'+m : m;

            setTime(`${h}:${m}`);


        }
    }, [data])

    return (
        <div 
            className={`chatListItem ${active? 'active' : ''}`}
            onClick={onClick}
        >
            <img 
                className="chatListItem--avatar"
                src={data.image}
                alt=""
            />
            <div className="chatListItem--lines">
            <div className="chatListItem--line">
                <div className="chatListItem--name">{data.title}</div>
                <div className="chatListItem--date">{time}</div>
            </div>
            <div className="chatListItem--line">
            <div className="chatListItem--lastMsg">
                <p>{data.lastMessage}</p>
            </div>
            </div>
            </div>
            
        </div>
    );
}