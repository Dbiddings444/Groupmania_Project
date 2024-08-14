import React from 'react';
import './ProfilePage.css'; // Import the CSS file for styling
import Header from '../components/Header'
import PostCard from '../components/PostCard'

const ProfilePage = (username,imageSrc) => {
    return (
        <div className='profilePage'>
            <Header />
            <div className='infoContainer'>
            <div className="userInfo-container">
                <div className='profilePic'></div>
                <h1>Randy Randallman</h1>
                </div>
                <div className="bio-container">
                <h1>Bio</h1>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lacinia tortor mus ornare platea hendrerit. Potenti habitant consequat posuere quis venenatis ut potenti leo. Vehicula placerat maecenas rhoncus curabitur justo malesuada. Id ipsum ligula cubilia condimentum curae nibh sapien tristique. Ut nisi eu; lacinia mattis aptent interdum lobortis. Non magnis vel mollis proin parturient turpis litora nec eget. Non commodo praesent accumsan habitasse primis risus integer.
Torquent adipiscing litora finibus nam torquent bibendum. Pharetra fusce dictum dui urna torquent sit habitasse. Aliquam ultricies pretium sociosqu libero cubilia nostra luctus. Tortor cras lacinia venenatis est habitant duis. Semper iaculis eu hac suspendisse vitae sem senectus fermentum. Platea taciti dictum dui neque lacinia nam quis morbi laoreet. Arcu penatibus dignissim proin inceptos proin parturient lacinia fermentum.</p>    
                </div>
                <div className="story-container">
                <h1>Recent Stories</h1>    
                <PostCard/>
                </div>
            </div>
     <div className='buttonDiv'><button className='deleteButton'>Delete User</button></div>   
        </div>
    );
};

export default ProfilePage