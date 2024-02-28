import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChats } from '../reducers/reducer';
import Chat from '../components/chat';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function Chats() {
  const username = useSelector((state) => state.reducer.username);
  const chats = useSelector((state) => state.reducer.chats);
  // const name = useSelector((state) => state.reducer.name);
  // const age = useSelector((state) => state.reducer.age);
  // const breed = useSelector((state) => state.reducer.breed);
  // const gender = useSelector((state) => state.reducer.gender);
  // const city = useSelector((state) => state.reducer.city);
  // const birthday = useSelector((state) => state.reducer.birthday);
  // const appointments = useSelector((state) => state.reducer.appointments);
  // const shotRecords = useSelector((state) => state.reducer.shotRecords);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const handleClickUpdateShot = (username, vaccine, lastVaccinated, dueDate) => {
  //   // console.log('apt', appointment);
  //   if (!lastVaccinated || !dueDate) return;
  //   fetch('/server/updateShot', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, vaccine, lastVaccinated, dueDate }),
  //   })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     dispatch(setShotRecord(res.shotRecords));
  //     })
  //   .catch(err => console.log(err));
  // }

  // const handleClickDeleteShot = (username, vaccine) => {
  //   // console.log('apt', appointment);
  //   fetch('/server/deleteShot', {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, vaccine }),
  //   })
  //   .then((res) => res.json())
  //   .then((res) => {
  //     dispatch(setShotRecord(res.shotRecords));
  //     })
  //   .catch(err => console.log(err));
  // }

  const handleClickPost = (username, timeStamp, message) => {
    // console.log('add item');
    // console.log(username, date, location, reason, time);
    if (!message) return;
    fetch('/server/chats', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, timeStamp, message }),
    })
    .then((res) => res.json())
    .then((res) => {
      // console.log('fetched');
      dispatch(setChats(res.chats));
      })
    .catch(err => console.log(err));
  }

  const chatList = [];

  for (let i = chats.length - 1; i >= 0; i--) {
    chatList.push(< Chat chat={chats[i]} />);
  }
  // chats.forEach(chat => {
  //   chatList.push(< Chat chat={chat} />);
  // });

  return (
    <div className='chatWindow'>
      <h4>Time For Pets To Talk</h4>
      <div className='chats'>
        {chatList}
      </div>
      <div className='postChat'>
        <form>
          <div className='chats-input'>
            <label className='form-label-chat'>Share: </label>
            <input placeholder='BARK BARK MEOW MEOW' type='text' className='chat-input' id='message' />
            {/* <input 
            className='chatPostButton'
            type="image" name="submit" src="assets/image/paw.jpeg" 
            border="0" alt="Submit" style="height: 30px;" 
            onClick={(event) => {
              event.preventDefault();
              handleClickPost(username, new Date().toLocaleString(), 
                document.querySelector('#message').value);
              document.querySelector('#message').value = ''; 
            }}/> */}
            <input
              className='chatPostButton'
              type='submit'
              value='GO'
              onClick={(event) => {
                event.preventDefault();
                handleClickPost(username, new Date().toLocaleString(), 
                  document.querySelector('#message').value);
                document.querySelector('#message').value = '';
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}