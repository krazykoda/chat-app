import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import ScrollToBottom from 'react-scroll-to-bottom';
import Options from './Options';
import Welcome from './Welcome';
import Message from './Message'

function Chat({location}) {
    const {name, room } = queryString.parse(location.search);
    const [menuStyle, setMenuStyle] = useState('menu');
    const [messages, setMessages] = useState([]);
    let msg;
    let obj;


    function handleSubmit(e) {
        e.preventDefault();
        msg = e.target.firstChild.value;
        obj =  {
            msg,
            user:name,
        }
        
        if(msg) {
            setMessages((prev) => {
                console.log(prev)
                return [...prev, obj]
            }, console.log(messages))
            
        } 

        e.target.firstChild.value ='';
    }
    
    const handleOption = () => {
        menuStyle==='menu'? setMenuStyle('menu show') : setMenuStyle('menu')
    }
    
    console.log('end')
    return (
        <div className='chat-container'>
            <div className='chat-box'>
                <div className='header'>
                    <div className="room">
                        <span className='status online'></span>
                        <em className='capitalize'>{room}</em>
                    </div>
                    <div className='option' onClick={handleOption}>
                        {menuStyle==='menu'? '...' : 'x'}
                    </div>
                </div>

                <div className='option-menu'>
                    <Options style={menuStyle} />
                </div>

                <div className="body">
                    <ScrollToBottom>
                        <Welcome user={name} room={room} />
                        {/* {messages.map((item, i) => <Message key={i} msg={item} />)} */}
                    </ScrollToBottom>
                </div>

                <form className="chat-form" onSubmit={handleSubmit}>
                    <input type="text" placeholder='type message'/>
                    <button type="submit">Send</button>
                </form>
            </div>  
        </div>
    )
}

export default Chat
