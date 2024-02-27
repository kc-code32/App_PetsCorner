import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';
import UserProfile from '../containers/userProfile';
import UserContent from '../containers/userContent';
import Chats from '../containers/chats';

export default function userPage() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);
  const user = useSelector((state) => state.reducer.currentUser);
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log(state)

  // fetch('/server/user', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ user }),
  // })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     dispatch(setName(res.name));
  //     dispatch(setAge(res.age));
  //     dispatch(setBreed(res.breed));
  //     dispatch(setGender(res.gender));
  //     dispatch(setBirthday(res.birthday));
  //     dispatch(setCity(res.city));
  //     dispatch(setAppoinment(res.appointments));
  //     dispatch(setShotRecord(res.shotRecords));
  //   })

  return (
    <div className='background-pic-user'>
      <UserProfile />
      <UserContent />
      <Chats />
    </div>
  )
}