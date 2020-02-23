import React from 'react'

// import style
import './introList.css';

const IntroList = ( { imageClass, text, answer }) => {
    return (
        <div className="IntroList">
            <i className={imageClass}/>
            <span className="i-l-text">{text}</span>
            <span className="i-l-ans">{answer}</span>
        </div>
    )
}

export default IntroList
