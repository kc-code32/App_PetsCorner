import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function Apt(props) {
  // const username = useSelector((state) => state.reducer.username);
  // const name = useSelector((state) => state.reducer.name);
  // const age = useSelector((state) => state.reducer.age);
  // const breed = useSelector((state) => state.reducer.breed);
  // const gender = useSelector((state) => state.reducer.gender);
  // const city = useSelector((state) => state.reducer.city);
  // const birthday = useSelector((state) => state.reducer.birthday);
  // const appointments = useSelector((state) => state.reducer.appointments);
  // const shotRecords = useSelector((state) => state.reducer.shotRecords);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { appointment, username, handleClickDelete } = props;
  console.log(appointment);


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