import React from 'react';
import { useSelector } from 'react-redux';
import UserProfile from '../components/userProfile';

export default function userProfile() {
  const username = useSelector((state) => state.reducer.username);
  const picLink = `assets/image/${username}.png`

  return (
    <div className='userProfile'>
      <div className='profilePic'>
        <img id='profilePic' src={picLink} />
      </div>
      <div className='username'>
        {username}
      </div>
      <UserProfile />
    </div>
  )
}