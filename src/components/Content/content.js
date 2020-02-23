import React, { Component } from 'react'

// import content style
import './content.css';
import LeftContent from './leftContent';
import RightContent from './rightContent';

export default class Content extends Component {
    render() {
        return (
            <div className="Content">
                <div className="c-header">
                    <img className="c-h-p-image" src="/images/fbimage.jpg" alt="alt"/>
                    <span className="c-h-p-text">Devarsh Patel</span>
                    <div className="add-photo">
                    <i class="fad fa-camera-alt"></i>
                        Add Cover Photo
                    </div>
                    <ul className="c-h-p-ul">
                        <li className="c-h-p-li">
                            <span className="c-li-text">Update Info</span>
                            <span className="c-li-not">1</span>
                        </li>
                        <li className="c-h-p-li item-2">
                            <i class="far fa-bars"></i>                            
                            <span className="c-li-text">Activity Log</span>
                            <i class="fal fa-ellipsis-h nav"></i>
                        </li>
                    </ul>
                </div>
                <div className="c-nav">
                    <ul className="c-n-ul">
                        <li className="c-n-ul-li">
                            Timeline
                            <i class="fas fa-sort-down" style={{color:"rgb(34, 0, 128)"}}></i>
                        </li>
                        <li className="c-n-ul-li">About</li>
                        <li className="c-n-ul-li">Friend</li>
                        <li className="c-n-ul-li">Photo</li>
                        <li className="c-n-ul-li">
                            <i class="fas fa-lock" style={{color:"rgb(34, 0, 128)"}}></i>
                            Archive
                        </li>
                        <li className="c-n-ul-li">
                            More
                            <i class="fas fa-sort-down" style={{color:"rgb(34, 0, 128)"}}></i>
                        </li>
                    </ul>
                </div>
                {/* Grid Start */}
                <div className="c-grid">
                    <LeftContent/>
                    <RightContent/>
                </div>
            </div>
        )
    }
}
