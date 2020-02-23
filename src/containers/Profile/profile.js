import React, { Component } from 'react'


// import style
import './profile.css';
import Header from '../../components/Header/header';
import Content from '../../components/Content/content';

export default class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <div className="p-header">
                    <Header/>
                </div>
                <div className="p-content container">
                    <Content/>
                </div>
            </div>
        )
    }
}
