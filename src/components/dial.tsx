import React from 'react';

function handleDrag(){
    console.log('dragging!')
}

function Dial(){
    return (
        <div className = "dial"
        style={{
            border:"1px solid white",
            borderRadius:"100%",
            height:'100px',
            width:'100px'
        }}
        >
        </div>
    )
}

export default Dial;