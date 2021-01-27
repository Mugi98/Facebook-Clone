import React from 'react';
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className= "storyReel">
            <Story
                image="https://images.unsplash.com/photo-1536029058117-75fb5c1c4c46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Yash Nimbalkar"
            />
            <Story
                image="https://images.unsplash.com/photo-1600031830097-10d2791a3b83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                title="Tejas Patil"
            />
            <Story
                image="https://images.unsplash.com/photo-1553484771-047a44eee27a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://i2.cdn.turner.com/cnn/2010/TECH/social.media/11/24/facebook.profile.shots.netiquette/t1larg.man.beer.jpg"
                title="Romit Deshpande"
            />
            <Story
                image="https://images.unsplash.com/photo-1523186329992-9f11e67df20f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fGluc3RhZ3JhbSUyMHN0b3JpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://i.pinimg.com/564x/04/bb/21/04bb2164bbfa3684118a442c17d086bf.jpg"
                title="Dhanraj Mhotie"
            />
        </div>
    )
}

export default StoryReel
