import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    const [emojiOpen, setEmojiOpen] = useState(false);
    const handleEmojiClick = () => {
        
    }

    const handleOpenCloseEmoji = (param) => {
        setEmojiOpen(param);
    }

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
                <SearchIcon style={{color: '#919191'}}/>
              </div>   
              <div className="chatWindow--btn">
                <AttachFileIcon style={{color: '#919191'}}/>
              </div> 
              <div className="chatWindow--btn">
                <MoreVertIcon style={{color: '#919191'}}/>
              </div> 
            </div>

            </div>

            {/* ************ */}

            <div className="chatWindow--body"></div>
            
            {/* ************ */}

            
            <div 
                className="chatWindow--emojiarea"
                style={{height: emojiOpen ? '200px' : '0px' }}
            >
                <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />
            </div>

            {/* ************ */}

            <div className="chatWindow--footer">
                <div className="chatWindow--pre">
                    {/* {emojiOpen &&  */}
                        <div 
                            className="chatWindow--btn"
                            style={{width: emojiOpen ? '40px' : '0'}}
                            onClick={() => handleOpenCloseEmoji(false)}
                        >
                            <CloseIcon style={{color: '#919191'}}/>
                        </div> 
                    {/* } */}
                    <div 
                        className="chatWindow--btn"
                        onClick={() => handleOpenCloseEmoji(true)}
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen ? '#009688': '#919191'}}/>
                    </div> 
                </div>
                
                <div className="chatWindow--inputarea">
                    <input 
                        placeholder="Digite uma mensagem"
                        className="chatWindow--input" 
                        type="text"/>
                </div>
                
                <div className="chatWindow--pos">
                    <div className="chatWindow--btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div> 
                </div>
            </div>
        </div>
    );
}