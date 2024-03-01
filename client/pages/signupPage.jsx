import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setUser, setName, setAge, setBreed, setGender, setBirthday, setCity, setAppoinment, setShotRecord, setUserName, setChats } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function signupPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);

  const signup = (username, password, name, age, breed, gender, birthday, city) => {
    fetch('server/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, name, age, breed, gender, birthday, city }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUser(res.id));
        dispatch(tryingToLogIn(res.loggedIn));
        if (res.loggedIn) {
          dispatch(loggingIn(res.loggedIn));
          dispatch(setName(res.user.name));
          dispatch(setUserName(res.user.username));
          dispatch(setAge(res.user.age));
          dispatch(setBreed(res.user.breed));
          dispatch(setGender(res.user.gender));
          dispatch(setBirthday(res.user.birthday));
          dispatch(setCity(res.user.city));
          dispatch(setAppoinment(res.user.appointments));
          dispatch(setShotRecord(res.user.shotRecords));
          dispatch(setChats(res.chats));
          navigate('/user');
        } else if (res.missInfo) {
          alert('Incorrect Info');
        } else if (res.existName) {
          alert('UserName already in used, please pick another UserName');
        }
      })
      .catch(err => console.log(err));
  };

  let userError;

  if (triedToLogIn === false)
    userError = (
      <p className='error'>
        Incorrect signup info inputs
      </p>
    );

  return (
    <div className='background-pic-signup'>
      <div className='main-div'>
        <form>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Username</label>
            <input placeholder='username' type='text' className='form-control' id='username' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Name</label>
            <input placeholder='name' type='text' className='form-control' id='name' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Age</label>
            <input placeholder='Age' type='text' className='form-control' id='age' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Breed</label>
            <input placeholder='breed' type='text' className='form-control' id='breed' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Gender</label>
            <input placeholder='gender' type='text' className='form-control' id='gender' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Birthday</label>
            <input placeholder='MM/DD/YYYY' type='text' className='form-control' id='birthday' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>City</label>
            <input placeholder='city' type='text' className='form-control' id='city' />
          </div>
          <div className='formInput mb-3'>
            <label className='form-label-pre'>Password</label>
            <input placeholder='password' type='password' className='form-control' id='password' />
            {userError}
          </div>
          <div>
            <input
              type='submit'
              value='Sign Up'
              onClick={(event) => {
                event.preventDefault();
                signup(document.querySelector('#username').value, document.querySelector('#password').value, 
                  document.querySelector('#name').value, document.querySelector('#age').value,
                  document.querySelector('#breed').value, document.querySelector('#gender').value,
                  document.querySelector('#birthday').value, document.querySelector('#city').value,);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
