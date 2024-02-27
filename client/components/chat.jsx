import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export default function Chat(props) {
  // const username = useSelector((state) => state.reducer.username);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { chat } = props;
  // console.log(shotRecord);
  const username = chat.username;
  const timeStamp = chat.timeStamp;
  const message = chat.message;

  const picLink = `assets/image/${username}.png`;

  return (
    <div className='chat'>
      <div classname='chatinfo'>
        <img id='chat-user-icon' src={picLink} />
        <span className='chat-username'>{username}</span><span className='chat-timeStamp'>{timeStamp}</span>
        {/* <div className='chat-user-icon'>
          <img id='chat-user-icon' src={picLink} />
        </div>
        <div className='chat-username'>
          {username}
        </div>
        <div className='chat-timeStamp'>
          {timeStamp}
        </div> */}
      </div>
      <div className='chat-message'>
        {message}
      </div>
    </div>
  )
}