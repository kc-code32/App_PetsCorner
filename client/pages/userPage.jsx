import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserName, setName, setAge, setBreed, setGender, setBirthday, setCity, setAppoinment, setShotRecord, setChats } from '../reducers/reducer';
import UserProfile from '../containers/userProfile';
import UserContent from '../containers/userContent';
import Chats from '../containers/chats';

export default function userPage() {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  if(!state.name) {
    fetch('/server/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUserName(res.user.username));
        dispatch(setName(res.user.name));
        dispatch(setAge(res.user.age));
        dispatch(setBreed(res.user.breed));
        dispatch(setGender(res.user.gender));
        dispatch(setBirthday(res.user.birthday));
        dispatch(setCity(res.user.city));
        dispatch(setAppoinment(res.user.appointments));
        dispatch(setShotRecord(res.user.shotRecords));
        dispatch(setChats(res.chats));
      });
  }

  // console.log('newstate', state);

  return (
    <div id="userContent" style={{ backgroundImage: 'url("assets/image/user.jpg")', backgroundRepeat: "repeat-y" }}>

      <div class="content-user"> 
        <UserProfile />
        <UserContent />
        <Chats />
      </div>

    </div>
  )
}

