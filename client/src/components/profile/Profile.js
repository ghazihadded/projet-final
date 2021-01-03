import React from 'react'
import CardFile from './CardFile'
import Calendars from './Calendars'
import PostFile from './PostFile'
import './Profile.css'

export const Profile = () => {
    return (
        <>
        <div className='row'>
            <div className='col-sm-3'>
       <CardFile /> 
       </div>
        
        <div className='col-sm-6'>
      <PostFile />
      <PostFile />
      <PostFile />
      <PostFile />
      <PostFile />
      </div>   
      <div className='col-sm-3'>
        <Calendars />
        <hr/>
        <p className='parag'>dhdjkfvjbdfvfnqdjkv qmfdiqdvn dfklv qnùm fnkl</p>
        </div> 
        
      </div>
     
        </>
    )
}



export default Profile