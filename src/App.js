import React from "react";
import './App.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
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
        <div className="search">search</div>
        <div className="chatlist">chatlist</div>
      </div>
      <div className="contentarea">...CONTENT</div>
    </div>
  );
}