import React from 'react';
import data from  '../data.json';
import './subinfo';
import Profileinfo from './profileinfo';
import './maininfo.css';
import profileimg from '../profileimg.jpg';


const subinfo = () => {
    return (
        <div className='cover-photo'>
            <div className='profile-photo'>
                <img src={profileimg} alt='profile-img' className='profileimge' />
                <div className='profile-name'>
                    <h3>{data.profile.middlename} {data.profile.firstname} &#9804; <span className='check-symbol'>&#10003;</span> </h3>
                    <Profileinfo /> 
                </div>  
            </div>
        </div>
    );
}

export default subinfo;