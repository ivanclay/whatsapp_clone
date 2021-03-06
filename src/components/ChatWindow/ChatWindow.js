import React, { useState, useEffect, useRef } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css'

import Api from '../../Api';
import MessageItem from '../MessageItem/MessageItem';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({user, data}) => {

    const body = useRef();

    let recognition = null;
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition !== undefined){
        recognition = new SpeechRecognition();
    }

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text, setText] = useState('');
    const [listening, setListening] = useState(false);
    const [talkList, setTalkList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setTalkList([]);
        let unsubscription = Api.onChatContent(data.chatId, setTalkList, setUsers);
        return unsubscription;
        
    }, [data.chatId])

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[talkList]);

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji);
    }

    const handleOpenCloseEmoji = (param) => {
        setEmojiOpen(param);
    }

    const handleSendClick = () => {
        if(text !== ''){
            Api.sendMessage(data, user.id, 'text', text, users);
            setText('');
            setEmojiOpen(false);
        }
    }
    
    const handleInputKeyUp = (e) => {
        if(e.keyCode === 13){
            handleSendClick();
        }
    }

    const handleMicClick = () => {
        if(recognition !== null){
            recognition.onstart = () => {
                setListening(true);
            }

            recognition.onend = () => {
                setListening(false);
            }

            recognition.onresult = (e) => {
                setText(e.results[0][0].transcript);
            }

            recognition.start();
        }
    }

    return (
        <div className="chatWindow">
            <div className="chatWindow--header">
            <div className="chatWindow--headerinfo">
                <img 
                    className="chatWindow--avatar"
                    src={data.image}
                    alt=""
                />
                <div className="chatWindow--name">{data.title}</div>
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

            <div ref={body} className="chatWindow--body">
                {talkList.map((item, k)=>(
                    <MessageItem
                        key={k}
                        data={item}
                        user={user}
                    />
                ))}
            </div>
            
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
                        type="text"
                        value={text}
                        onChange={e=>setText(e.target.value)}
                        onKeyUp={handleInputKeyUp}
                        />
                </div>
                
                <div className="chatWindow--pos">
                    {text === '' &&
                        <div onClick={handleMicClick} className="chatWindow--btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}}/>
                         </div>
                    }
                    {text !== '' &&
                        <div onClick={handleSendClick} className="chatWindow--btn">
                            <SendIcon style={{color: '#919191'}}/>
                        </div> 
                    }
                </div>
            </div>
        </div>
    );
}