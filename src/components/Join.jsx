import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='join-container' >
            <div className='join-form'>
            <h1>JOIN</h1> 
            
            <input type="text" placeholder='Name' value={name}  onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <Link onClick={(e) => !name&!room ? e.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
                <button className='btn'>join</button>
            </Link>
            </div>
        </div>
    )
}

export default Join
