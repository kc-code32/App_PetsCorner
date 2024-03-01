import React from 'react';

export default function Shot(props) {

  const { shotRecord, username, handleClickUpdateShot, handleClickDeleteShot } = props;
  const vaccine = shotRecord.vaccine;

  return (
    <div className='shot'>
      <div className='shotDetail'>
        <div>
          <label>Vaccine: </label><span>{vaccine}</span>
        </div>
        <div>
          <label>Last Vaccinated: </label><span>{shotRecord.lastVaccinated}</span>
        </div>
        <div>
          <label>Due Date: </label><span>{shotRecord.dueDate}</span>
        </div>
        <div>
          <form className='updateShotForm'>
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