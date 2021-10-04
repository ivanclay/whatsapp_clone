import React, {useEffect, useState} from 'react';
import './MessageItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({data, user}) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        if(data.date > 0){
            let d = new Date(data.date  * 1000);

            let h = d.getHours();
            let m = d.getMinutes();

            h = h < 10 ? '0'+h : h;
            m = m < 10 ? '0'+m : m;

            setTime(`${h}:${m}`);
        }
    }, [data])

    return (
        <div 
            className="messageLine"
            style={{
                justifyContent: user.id === data.author ? 'flex-end' : 'flex-start'
            }}
        >
           <div 
                className="messageItem"
                style={{
                    backgroundColor: user.id === data.author ? '#DCF8C6' : '#FFF'
                }}
           >
           <div className="messageText">{data.body}</div>
           <div className="messageDate">{time}</div>
           </div>
        </div>
    );
}