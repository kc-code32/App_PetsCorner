import React from 'react';

export default function Chat(props) {

  const { chat } = props;
  const username = chat.username;
  const timeStamp = chat.timeStamp;
  const message = chat.message;

  const picLink = `assets/image/${username}.png`;

  return (
    <div className='chat'>
      <div classname='chatinfo'>
        <img id='chat-user-icon' src={picLink} />
        <span className='chat-username'>{username}</span><span className='chat-timeStamp'>{timeStamp}</span>
      </div>
      <div className='chat-message'>
        {message}
      </div>
    </div>
  )
}