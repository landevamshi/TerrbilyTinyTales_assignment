import React from 'react';
import './profileinfo.css';
import data from '../data.json'

const Profileinfo = () => {
  return (
    <div className='arrange-boxes'>
        <div>
            <p className='info-box'> {data.profile.followers} </p>
            <p className='info-box-name'> Followers</p>
        </div>
        <div>
            <p className='info-box'> {data.profile.following} </p>
            <p className='info-box-name'> Following</p>
        </div>
    </div>
  );
}

export default Profileinfo;
