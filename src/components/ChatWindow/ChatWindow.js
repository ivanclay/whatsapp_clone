import React from 'react';
import './ChatWindow.css'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
            <div className="chatWindow--headerinfo">
                <img 
                    className="chatWindow--avatar"
                    src="https://clinica.cenfesaude.com.br/wp-content/uploads/2021/02/img_avatar.png"
                    alt=""
                />
                <div className="chatWindow--name">Fulano de Tal</div>
            </div>

            <div className="chatWindow--headerbuttons">
            <div className="chatWindow--btn">
                <AttachFileIcon style={{color: '#919191'}}/>
              </div> 
            <div className="chatWindow--btn">
                <SearchIcon style={{color: '#919191'}}/>
              </div>   
              <div className="chatWindow--btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div> 
            </div>

            </div>
            <div className="chatWindow--body"></div>
            <div className="chatWindow--footer"></div>
        </div>
    );
}