import React from 'react';

export default function Apt(props) {

  const { appointment, username, handleClickDelete } = props;

  return (
    <div className='apt'>
      <div className='aptDetail'>
        <div>
          <label>Reason: </label><span>{appointment.reason}</span>
        </div>
        <div>
          <label>Location: </label><span>{appointment.location}</span>
        </div>
        <div>
          <label>Date: </label><span>{appointment.date}</span>
        </div>
        <div>
          <label>Time: </label><span>{appointment.time}</span>
        </div>
        <div>
          <button className='deleteApt' onClick={() => {handleClickDelete(username, appointment)}}>Delete</button>
        </div>
      </div>
    </div>
  )
}