import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setChats } from '../reducers/reducer';
import Chat from '../components/chat';

export default function Chats() {
  const username = useSelector((state) => state.reducer.username);
  const chats = useSelector((state) => state.reducer.chats);

  const dispatch = useDispatch();

  const handleClickPost = (username, timeStamp, message) => {
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
      dispatch(setChats(res.chats));
      })
    .catch(err => console.log(err));
  }

  const chatList = [];

  for (let i = chats.length - 1; i >= 0; i--) {
    chatList.push(< Chat chat={chats[i]} />);
  }

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