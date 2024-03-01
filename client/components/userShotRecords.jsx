import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShotRecord } from '../reducers/reducer';
import Shot from './shot';

export default function UserShotRecords() {
  const username = useSelector((state) => state.reducer.username);
  const shotRecords = useSelector((state) => state.reducer.shotRecords);
  const dispatch = useDispatch();

  const handleClickUpdateShot = (username, vaccine, lastVaccinated, dueDate) => {
    if (!lastVaccinated || !dueDate) return;
    fetch('/server/updateShot', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, vaccine, lastVaccinated, dueDate }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setShotRecord(res.shotRecords));
      })
      .catch(err => console.log(err));
  }

  const handleClickDeleteShot = (username, vaccine) => {
    fetch('/server/deleteShot', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, vaccine }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setShotRecord(res.shotRecords));
      })
      .catch(err => console.log(err));
  }

  const handleClickAddShot = (username, vaccine, lastVaccinated, dueDate) => {
    // console.log('add item');
    // console.log(username, date, location, reason, time);
    if (!lastVaccinated || !dueDate) return;
    fetch('/server/addShot', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, vaccine, lastVaccinated, dueDate }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log('fetched');
        dispatch(setShotRecord(res.shotRecords));
      })
      .catch(err => console.log(err));
  }

  const shotList = [];

  shotRecords.forEach(shot => {
    shotList.push(< Shot shotRecord={shot} username={username} handleClickUpdateShot={handleClickUpdateShot} handleClickDeleteShot={handleClickDeleteShot} />)
  })

  return (
    <div className='shotRecord'>
      <h4>Vaccination Records</h4>
      <div className='shotList'>
        {shotList}
      </div>
      <div className='addShot'>
        <form>
          <div className='add-shot'>
            <label className='form-label-user'>Vaccine: </label>
            <input placeholder='vaccine' type='text' className='form-input' id='vaccine' />
          </div>
          <div className='add-shot'>
            <label className='form-label-user'>Last Vaccinated: </label>
            <input placeholder='MM/DD/YYYY' type='text' className='form-input' id='lastVaccinated' />
          </div>
          <div className='add-shot'>
            <label className='form-label-user'>Due Date: </label>
            <input placeholder='MM/DD/YYYY' type='text' className='form-input' id='dueDate' />
          </div>
          <div>
            <input
              className='submit'
              type='submit'
              value='Add Vaccination'
              onClick={(event) => {
                event.preventDefault();
                
                handleClickAddShot(username, document.querySelector('#vaccine').value, document.querySelector('#lastVaccinated').value,
                  document.querySelector('#dueDate').value);

                document.querySelector('#vaccine').value = '';
                document.querySelector('#lastVaccinated').value = '';
                document.querySelector('#dueDate').value = '';
              }}
            />
          </div>
        </form>
      </div>
    </div>
  )
}