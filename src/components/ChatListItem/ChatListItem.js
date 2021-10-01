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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </div>
            </div>
            
        </div>
    );
}