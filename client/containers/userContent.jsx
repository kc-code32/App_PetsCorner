import React from 'react';
import UserApts from '../components/userApts';
import UserShotRecords from '../components/userShotRecords';

export default function UserContent() {

  return (
    <div className='userContent'>
      <UserApts />
      <UserShotRecords />
    </div>
  )
}
