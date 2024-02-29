import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setUser, setUserName, setName, setAge, setBreed, setGender, setBirthday, setCity, setAppoinment, setShotRecord, setChats } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function logInPage() {
  const dispatch = useDispatch();
  const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  const navigate = useNavigate();

  const login = (username, password) => {
    fetch('/server/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setUser(res.id));
        dispatch(tryingToLogIn(res.loggedIn));
        dispatch(loggingIn(res.loggedIn));
        if (res.loggedIn) {
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
          navigate('/user');
        } else {
          alert('Please enter valid username and password');
        }
      });
  };

  let userError;

  if (triedToLogIn === false) userError = <div className='error'>Username/Password not found</div>;

  return (
    <div className='background-pic-login'>
      <div className='main-div'>
        <form>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input placeholder='username' type='text' className='form-control' id='username' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input placeholder='password' type='password' className='form-control' id='password' />
            {userError}
          </div>
          <div>
            <input
              type='submit'
              value='Log In'
              onClick={(event) => {
                event.preventDefault();
                login(document.querySelector('#username').value, document.querySelector('#password').value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
