import React from 'react'

// import style
import './divWithNot.css';

const DivWithNot = ({ text, imageLink, notText, imageClass }) => {
    return (
        <div className="DivWithNot">
            <i className={imageClass} style={{color:"#fff"}}></i>
            {text}
            <div className="DivWithNot-not">
                {notText}
            </div>            
        </div>
    )
}

export default DivWithNot;