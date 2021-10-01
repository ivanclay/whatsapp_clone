import React, { useState, useEffect } from "react";
import './App.css';

import ChatListItem from "./components/ChatListItem/ChatListItem";
import ChatIntro from "./components/ChatIntro/ChatIntro";
import ChatWindow from "./components/ChatWindow/ChatWindow";

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Fulano', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 2, title: 'Joana', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 3, title: 'Mario', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
    {chatId: 4, title: 'Astolfo', image: 'https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png'},
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img 
            className="header--avatar" 
            src="https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png" 
            alt=""
          />
          <div className="header--buttons">
              <div className="header--btn">
                <DonutLargeIcon style={{color: '#919191'}}/>
              </div>
              <div className="header--btn">
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
          <ChatWindow />
        }
         {activeChat.chatId === undefined &&
          <ChatIntro/>
        }
        
      </div>
    </div>
  );
}