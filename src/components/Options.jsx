import React from 'react'

function Options({style}) {
    return (
        <div className={style}>
            <ul>
                <li>Friends</li>
                <li>Account</li>
                <a href='/'><li>Close</li></a>
            </ul>
        </div>
    )
}

export default Options
