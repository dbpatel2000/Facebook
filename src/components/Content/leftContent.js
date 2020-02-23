import React, { Component } from 'react'

// add style
import './content.css';
import IntroList from '../../components/hoc/IntroList/introList';

const IntroData = [
    {
        "class" :"fal fa-graduation-cap",
        "text" : "Studied at",
        "answer" : "VIT University"
    },    
    {
        "class" :"fal fa-graduation-cap",
        "text" : "Went to",
        "answer" : "Nutan English School"
    },
    {
        "class" :"fal fa-graduation-cap",
        "text" : "Lives in",
        "answer" : "Vellore"
    },
    {
        "class" :"fal fa-graduation-cap",
        "text" : "From",
        "answer" : "Ahmedabad, India"
    }
]

const FriendData = [
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    },
    {
        "image" : "https://scontent.fbom3-2.fna.fbcdn.net/v/t1.0-1/p100x100/62491141_2118421111590459_8516266350866333696_n.jpg?_nc_cat=103&_nc_oc=AQlW1EfAsC4cJQSInfy82yXiL7-7rPdX3AFb5axaGD24cnWUFXfbb1uKJtoeduUuSOA&_nc_ht=scontent.fbom3-2.fna&_nc_tp=6&oh=8e7edaa56ba3ec587a478ce138222d82&oe=5EC346A6",
        "name" : "Kris Gurang"
    }
]

const getIntroList = (items) => {
    return (
        items.map ((item,key)=>{
            return (
                <IntroList
                    imageClass={item.class}
                    text={item.text}
                    answer={item.answer}
                />
            )
        })
    )
}

const getFriend = (items) => {
    return (
        items.map((item,key) => {
            return (
                <div className="i-class">
                    <img src={item.image} alt="alt"></img>
                    <span>{item.name}</span>
                </div>
            )
        })
    )
}


export default class LeftContent extends Component {
    render() {
        return (
            <div className="c-grid-left">
                        <div className="c-g-l-intro">
                            <div className="intro">
                                <i class="fas fa-globe-americas" style={{color:"rgb(34, 0, 128)"}}></i>
                                <span className="intro-text">Intro</span>
                            </div>
                            <div class="intro-head">
                                <i class="far fa-comment-alt"></i>
                                <span className="i-h-grey">Add a short bio to tell people about yourself.</span>
                                <span className="i-h-blue">Add bio</span>
                            </div>
                            <div className="i-list">
                                {getIntroList(IntroData)}
                                <button>Edit Details</button>
                            </div>
                            <div class="intro-bottom">
                                <i class="fas fa-star"></i>
                                <span className="i-h-grey">Showcase what's important to you by adding photos, Pages, groups and more to your featured section on your public profile.</span>
                                <span className="i-h-blue">Add to Featured</span>
                            </div>
                        </div>
                        <div className="c-g-l-photo">
                            <div className="photo-head">
                                <div className="p-h-image">
                                    <i class="far fa-images" style={{color:"green",paddingRight:"5px"}}></i>
                                    <span>Photos</span>
                                </div>
                                <span>Add photo</span>
                            </div>
                            <div class="photo-content">
                                <i class="fal fa-image"></i>
                                <span className="i-h-grey">Show people what you've been up to.</span>
                            </div>
                            <div className="photo-btn">
                                <ul className="p-b-ul">
                                    <li>Not Now</li>
                                    <li>Add Photo</li>
                                </ul>
                            </div>
                        </div>
                        <div className="c-g-l-friend">
                            <div className="friend-head">
                                <div className="f-h-image">
                                    <i class="far fa-images" style={{color:"red",paddingRight:"5px"}}></i>
                                    <span>Friends</span>
                                </div>
                                <span>Find Friend</span>
                            </div>
                            <div className="f-list">
                                {getFriend(FriendData)}
                            </div>
                        </div>
                        <div className="lang">
                            <div className="l-text">
                                <span>English(UK)</span>
                                <span>English(US)</span>
                            </div>
                            <i class="fal fa-plus-square"></i>
                        </div>
                        <span>Facebook &copy; 2020</span>
                    </div>
        )
    }
}
