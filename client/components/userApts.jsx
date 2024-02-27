import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setUser, setAppoinment } from '../reducers/reducer';
import Apt from './apt';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function UserApts() {
  const username = useSelector((state) => state.reducer.username);
  const name = useSelector((state) => state.reducer.name);
  const age = useSelector((state) => state.reducer.age);
  const breed = useSelector((state) => state.reducer.breed);
  const gender = useSelector((state) => state.reducer.gender);
  const city = useSelector((state) => state.reducer.city);
  const birthday = useSelector((state) => state.reducer.birthday);
  const appointments = useSelector((state) => state.reducer.appointments);
  const shotRecords = useSelector((state) => state.reducer.shotRecords);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleClickDelete = (username, appointment) => {
    // console.log('apt', appointment);
    fetch('/server/deleteApt', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, appointment }),
    })
    .then((res) => res.json())
    .then((res) => {
      dispatch(setAppoinment(res.appointments));
      })
    .catch(err => console.log(err));
  }

  const handleClickAdd = (username, date, location, reason, time) => {
    // console.log('add item');
    // console.log(username, date, location, reason, time);
    fetch('/server/addApt', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, date, location, reason, time }),
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('fetched');
      dispatch(setAppoinment(res.appointments));
      })
    .catch(err => console.log(err));
  }

  const picLink = `assets/image/${username}.png`

  const aptList = [];

  appointments.forEach(apt => {
    aptList.push(< Apt appointment={apt} username={username} handleClickDelete={handleClickDelete} />)
  })

  return (
    // <div className='userContext'>
    //   <div className='profileInfo'>
    //     <h4>Profile</h4>
    //     <div>
    //       <label>Name: </label><span>{name}</span>
    //     </div>
    //     <div>
    //       <label>Age: </label><span>{age}</span>
    //     </div>
    //     <div>
    //       <label>Breed: </label><span>{breed}</span>
    //     </div>
    //     <div>
    //       <label>Gender: </label><span>{gender}</span>
    //     </div>
    //     <div>
    //       <label>Birthday: </label><span>{birthday}</span>
    //     </div>
    //     <div>
    //       <label>City: </label><span>{city}</span>
    //     </div>
    //   </div>
    <div className='appointments'>
      <h4>Appointments</h4>
      <div className='aptList'>
        {aptList}
      </div>
      <div className='addApt'>
        <form>
          <div className='add-apt-div'>
            <label className='form-label-user'>Date: </label>
            <input placeholder='MM/DD/YYYY' type='text' className='form-input' id='date' />
          </div>
          <div className='add-apt-div'>
            <label className='form-label-user'>Location: </label>
            <input placeholder='location' type='text' className='form-input' id='location' />
          </div>
          <div className='add-apt-div'>
            <label className='form-label-user'>Reason: </label>
            <input placeholder='reason' type='text' className='form-input' id='reason' />
          </div>
          <div className='add-apt-div'>
            <label className='form-label-user'>Time: </label>
            <input placeholder='00:00' type='text' className='form-input' id='time' />
          </div>
          <div>
            <input
              className='submit'
              type='submit'
              value='Add Appointment'
              onClick={(event) => {
                event.preventDefault();
                handleClickAdd(username, document.querySelector('#date').value, document.querySelector('#location').value,
                  document.querySelector('#reason').value, document.querySelector('#time').value);
                document.querySelector('#date').value = '';
                document.querySelector('#location').value = '';
                document.querySelector('#reason').value = '';
                document.querySelector('#time').value = '';
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}