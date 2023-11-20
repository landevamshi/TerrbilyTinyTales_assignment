import React from 'react';
import data from  '../data.json';    
import './subinfo.css';
import star from '../symbols/star.png'
import likes from '../symbols/like.png'
import view from '../symbols/view.png'
import heart from '../symbols/heart.png'


const subinfo = () => {
    return (
        <div>
            <div className='info-place'>
                <p>{data.profile.Bio}</p>
                <a href={data.profile.link}>{data.profile.link}</a>
            </div>
            <div className='info-detail-place'>
                <div className='info-detail-arrange'> 
                    <img src={star} alt='like' />
                    <p> {data.profile.star} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={likes} alt='like' />
                    <p> {data.profile['profile-likes']} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={view} alt='like' />
                    <p> {data.profile['profile-view']} </p>
                </div>
                <div className='info-detail-arrange'> 
                    <img src={heart} alt='like' />
                    <p> {data.profile.loves} </p>
                </div>
            </div>
            <div className='post-place'>
                    <span className='posts'>{data.profile.posts} Posts</span>
            </div>
            <div className='post-bottom-line'>
            </div>
            <div className='sub'>
                <div className='matter'>
                    <h2>A Changing  World Order</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ...</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>musing by</span> {data.profile.middlename}{data.profile.lastname} </p>
                    <p className='sub-m-info-2'>August2 . 2mins Read . 102 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>

            <div className='sub'>
                <div className='matter'>
                    <h2>Indian v/s Australia</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>Think about it - this cricket was akin to therapy <br /> <br />Laying our Childhood trauma up top, working with it slowly and surely over two m...</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>thought by</span> {data.profile.middlename}{data.profile.lastname} </p>
                    <p className='sub-m-info-2'>January 21 . 1 min Read . 156 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>

            <div className='sub'>
                <div className='matter'>
                    <h2>Write To Build</h2>
                    <img src={likes} alt='like' className='matter-like'/> 
                </div>
                <div className='sub-matter'>
                    <p>Writing is the first step to create: <br/><br/>-stories <br/>-products <br/>-companies</p>
                </div>
                <div className='matter-info'>
                    <p className='sub-m'><span className='sub-m-info'>thought by</span> {data.profile.middlename}{data.profile.lastname} </p>
                    <p className='sub-m-info-2'>November 18 . 1mins Read . 228 Views</p>
                </div>
                <div className='sub-border'></div>
            </div>
        </div>
    );
}

export default subinfo;