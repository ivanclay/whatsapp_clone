import React, { useState, useEffect } from 'react';
import './NewChat.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Api from '../../Api';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, chatList, show, setShow}) => {
    const [contactList, setContactList] = useState([
            // {id: 145, avatar: 'https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg', name:'Pedro Joaquim'},
            // {id: 145, avatar: 'https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg', name:'Pedro Joaquim'},
            // {id: 145, avatar: 'https://i.pinimg.com/736x/59/74/d0/5974d04323d9efbaf170c72cfdb07b44.jpg', name:'Pedro Joaquim'},
        ]);

    const handleClose = () => {
        setShow(false);
    }

    useEffect(() => {
        const getContactList = async () => {
            if(user !== null){
                let result = await Api.getContactList(user.id);
                setContactList(result);
            }
        }
        getContactList();
    }, [user])

    const addNewChat = async (userInvited) => {
        await Api.addNewChat(user, userInvited);
        handleClose();
    }



    return (
        <div className="newChat" style={{left: show ? 0 : -415}}>
            <div className="newChat--head">
            <div onClick={handleClose} className="newChat--backbutton">
                <ArrowBackIcon style={{color: '#FFF'}} />
            </div>
            <div className="newChat--headtitle">Nova conversa</div>
            </div>
            <div className="newChat--list">
                {contactList.map((item,k)=>(
                    <div 
                        key={k} 
                        className="newChat--item"
                        onClick={()=>addNewChat(item)}
                    >
                        <img className="newChat--itemavatar" src={item.avatar} alt="" />
                        <div className="newChat--itemname">{item.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}