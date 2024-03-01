import React from 'react';
import UserApts from '../components/userApts';
import UserShotRecords from '../components/userShotRecords';


export default function UserContent() {

  return (
    <div className='userContent'>
      {/* <UserProfile /> */}
      <UserApts />
      <UserShotRecords />
    </div>
  )
};
