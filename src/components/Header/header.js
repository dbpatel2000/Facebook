import React from 'react'

// import header style
import './header.css';
import DivWithNot from '../hoc/divWithNot/divWithNot';

const data = [
    {
        "name" : "Devarsh"
    },
    {
        "name" : "Home"
    },
    {
        "name" : "Create"
    }
]

const getHeaderText = (items) => {
    return (
        items.map((item,key) => {
            return (
                <li>{item.name}</li>
            )
        })
    )
}

const Header = () => {
    return (
        <div className="Header">
            <img className="h-image" src="https://upload.wikimedia.org/wikipedia/commons/4/4d/F_icon_reversed.svg" alt="alt"/>
            <div className="h-input">
                <input type="text" placeholder="Devarsh"/>
                <div className="h-input-s">
                    <i class="far fa-search"/>
                </div>
            </div>
            <div className="h-left">
                <img className="h-img" src="/images/fbimage.jpg" alt="alt"/>
                <ul className="h-ul">
                    {getHeaderText(data)}
                </ul>
                <i class="m-1 fas fa-user-friends"></i>
                <div className="h-mes">
                    <DivWithNot
                        className="h-mes"
                        imageClass="fas fa-comment-smile"
                        notText="1"
                    />
                </div>
                <div className="h-mes">
                    <DivWithNot
                        className="h-mes"
                        imageClass="fas fa-bell"
                        notText="1"
                    />
                </div>            
                <i class="m-1 fas fa-question-circle"></i>
            </div>
        </div>
    )
}


export default Header
