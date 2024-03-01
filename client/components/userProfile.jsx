import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function userProfile() {
  const name = useSelector((state) => state.reducer.name);
  const age = useSelector((state) => state.reducer.age);
  const breed = useSelector((state) => state.reducer.breed);
  const gender = useSelector((state) => state.reducer.gender);
  const city = useSelector((state) => state.reducer.city);
  const birthday = useSelector((state) => state.reducer.birthday);

  return (
    <div className='profileInfo'>
      <h4>Profile</h4>
      <div>
        <label>Name:  {name}</label>
      </div>
      <div>
        <label>Age:  {age}</label>
      </div>
      <div>
        <label>Breed:  {breed}</label>
      </div>
      <div>
        <label>Gender:  {gender}</label>
      </div>
      <div>
        <label>Birthday:  {birthday}</label>
      </div>
      <div>
        <label>City:  {city}</label>
      </div>
    </div>
  )
}