import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: null,
  triedToLogIn: null,
  currentUser: null,
  username: null,
  name: null,
  age: null,
  breed: null,
  gender: null,
  birthday: null,
  city: null,
  appointments: [],
  shotRecords: [],
  chats: [],
  // colorTheme: null,
}

export const reducer = createSlice({
  name: 'reducer',
  initialState,
  // Below `reducers` field allow us to define reducers and generate associated actions
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    loggingIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    tryingToLogIn: (state, action) => {
      state.triedToLogIn = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setBreed: (state, action) => {
      state.breed = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBirthday: (state, action) => {
      state.birthday = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setAppoinment: (state, action) => {
      state.appointments = action.payload;
    },
    setShotRecord: (state, action) => {
      state.shotRecords = action.payload;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    // changeTheme: (state, action) => {
    //   state.colorTheme = action.payload;
    // },
  }
})

export const {
  setUserName,
  loggingIn,
  tryingToLogIn,
  // changeTheme,
  setUser,
  setName, 
  setAge, 
  setBreed, 
  setGender, 
  setBirthday, 
  setCity, 
  setAppoinment, 
  setShotRecord,
  setChats,
} = reducer.actions;

export default reducer.reducer;