import React, { useState, useEffect } from "react";
import './App.css';

import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import NewChat from "./components/NewChat/NewChat";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Login from "./components/Login/Login";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 2, title: 'Joana', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 3, title: 'Mario', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 4, title: 'Astolfo', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState(null);

  const [showNewChat, setShowNewChat] = useState(false);

  const handleOpenNewChatChoose = () => {
    setShowNewChat(true);
  }

  const handleLoginData = (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    };
    //
    setUser(newUser);
  }

  if(user === null){
    return (<Login onReceive={handleLoginData} />);
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat 
            user={user}
            chatList={chatList}
            show={showNewChat} 
            setShow={setShowNewChat}
        />
        <header>
          <img 
            className="header--avatar" 
            src={user.avatar} 
            alt=""
          />
          <div className="header--buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{color: '#919191'}}/>
              </div>
              <div onClick={handleOpenNewChatChoose} className="header--btn">
                <ChatIcon style={{color: '#919191'}}/>
              </div>   
              <div className="header--btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div>       
          </div>
        </header>
        <div className="search">
        <div className="search--input">
            <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Pesquisar ou começar uma nova conversa" />
        </div>
        </div>
        <div className="chatlist">
          {chatList.map((i,k)=>(
            <ChatListItem 
              key={k} 
              active={activeChat.chatId === chatList[k].chatId}
              data={i} 
              onClick={() => setActiveChat(chatList[k])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined &&
          <ChatWindow user={user}/>
        }
         {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
        
      </div>
    </div>
  );
}