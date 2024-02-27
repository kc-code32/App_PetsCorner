import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
// import { useNavigate } from 'react-router-dom';
// import UserProfile from '../containers/userProfile';
// import UserContent from '../containers/userContent';
// import Chatroom from '../containers/chatroom';

export default function Shot(props) {
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

  const { shotRecord, username, handleClickUpdateShot, handleClickDeleteShot } = props;
  // console.log(shotRecord);
  const vaccine = shotRecord.vaccine;

  return (
    <div className='shot'>
      <div className='shotDetail'>
        <div>
          <label>Vaccine: </label><span>{shotRecord.vaccine}</span>
        </div>
        <div>
          <label>Last Vaccinated: </label><span>{shotRecord.lastVaccinated}</span>
        </div>
        <div>
          <label>Due Date: </label><span>{shotRecord.dueDate}</span>
        </div>
        <div>
          <form className='addShotForm'>
            <div className='updateshot'>
              <label className='form-label-user'>Updated Last Vaccinated: </label>
              <input placeholder='MM/DD/YYYY' type='text' className='form-input' id='updatedLastVaccinated' />
            </div>
            <div className='updateshot'>
              <label className='form-label-user'>Updated Due Date: </label>
              <input placeholder='MM/DD/YYYY' type='text' className='form-input' id='updatedDueDate' />
            </div>
            <div>
                <input
                  className='submit'
                  type='submit'
                  value='Update'
                  onClick={(event) => {
                    event.preventDefault();
                    handleClickUpdateShot(username, vaccine, document.querySelector('#updatedLastVaccinated').value,
                      document.querySelector('#updatedDueDate').value);
                    document.querySelector('#updatedLastVaccinated').value = '';
                    document.querySelector('#updatedDueDate').value = '';
                  }}
                />
              </div>
          </form>
        </div>
        <div>
          <button className='deleteShot' onClick={() => {handleClickDeleteShot(username, vaccine)}}>Delete</button>
        </div>
      </div>
    </div>
  )
}