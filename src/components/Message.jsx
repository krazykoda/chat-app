import React from 'react'

function Message({user,message,state}) {
    return (
        <div className='msg-box'>
            <div className='msg'>{message}</div>
        </div>
    )
}

export default Message
