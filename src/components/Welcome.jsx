import React from 'react'

function Welcome({user, room}) {
    
    return (
        <div>
           <div className='welcome-msg'>
            {`Welcome ${user} to the ${room} chat room`}
           </div> 
        </div>
    )
}

export default Welcome
