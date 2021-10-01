import React from 'react';
import './ChatListItem.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="chatListItem">
            <img 
                className="chatListItem--avatar"
                src="https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png"
                alt=""
            />
            <div className="chatListItem--lines">
            <div className="chatListItem--line">
                <div className="chatListItem--name">Ivan</div>
                <div className="chatListItem--date">19:00</div>
            </div>
            <div className="chatListItem--line">
            <div className="chatListItem--lastMsg">
                <p>Opa!!!</p>
            </div>
            </div>
            </div>
            
        </div>
    );
}