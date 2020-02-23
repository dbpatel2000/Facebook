import React, { Component } from 'react'

// add style
import './content.css';

const ActivityData = [
    {
        "name" : "Create Post",
        "class" : "fas fa-pencil-alt"
    },
    {
        "name" : "Photos/Videos",
        "class" : "fas fa-camera"
    },
    {
        "name" : "Live video",
        "class" : "fas fa-video-plus"
    },
    {
        "name" : "Life Event",
        "class" : "fas fa-pennant"
    },
]

const ActivityBottomData = [
    {
        "name" : "Create Post",
        "color" : "green",
        "class" : "fas fa-pencil-alt"
    },
    {
        "name" : "Photos/Videos",
        "color" : "blue",
        "class" : "fas fa-camera"
    },
    {
        "name" : "Live video",
        "color" : "red",
        "class" : "fas fa-video-plus"
    },
    {
        "name" : "",
        "class" : "far fa-ellipsis-h"
    },
]

const getActivity = (items) => {
    return (
        items.map( (item,key) => {
            return (   
                <li className="r-h-ul-li">
                    <i className={item.class}></i>
                    <span>{item.name}</span>
                </li>
        )})
    )
}

const getBottomRightHead = (items) => {
    return (
        items.map((item,key)=>{
            return (
                <li className="r-h-l-li">
                    <i className={item.class} style={{color: item.color}}></i>
                    <span>{item.name}</span>
                </li>
            )
        })
    )
}

export default class RightContent extends Component {
    render() {
        return (
            <div className="RightContent">
                <div className="right-head">
                    <ul className="r-h-ul">
                        {getActivity(ActivityData)}
                    </ul>
                    <div className="r-h-comment">
                        <div className="r-h-c">
                            <img className="r-h-c-image" src="/images/fbimage.jpg" alt="alt"></img>
                            <input className="r-h-c-text" type="text" placeholder="What's on your mind?"/>
                        </div>
                        <ul className="r-h-l-ul">
                            {getBottomRightHead(ActivityBottomData)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
