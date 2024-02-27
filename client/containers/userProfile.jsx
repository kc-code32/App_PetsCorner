import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../components/userProfile';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function userProfile() {
  const username = useSelector((state) => state.reducer.username);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const picLink = `assets/image/${username}.png`

  // let sideBar = [];
  // if (loggedIn) sideBar.push(<SideBar key={'sidebar'} />);

  // // forced public container for github static pages
  // return loggedIn ? (
  //   <div>
  //     {sideBar}
  //     <MainContainer />
  //   </div>
  // ) : (
  //   <div>
  //     <PublicContainer />
  //   </div>
  // );
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