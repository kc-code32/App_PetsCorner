import React from 'react';
// import MainContainer from '../containers/mainContainer.jsx';
// import PublicContainer from '../containers/publicContainer.jsx';
// import { useSelector } from 'react-redux';
// import SideBar from '../components/leftComponents/sideBar.jsx';

export default function homePage() {
  // const loggedIn = useSelector((state) => state.reducer.loggedIn);

  // let sideBar = [];
  // if (loggedIn) sideBar.push(<SideBar key={'sidebar'} />);

  // // forced public container for github static pages
  // return loggedIn ? (
  //   <div>
  //     {sideBar}
  //     <MainContainer />
  //   </div>
  // ) : (
  //   <div>
  //     <PublicContainer />
  //   </div>
  // );
  return (
    <body className='homepage-background'>
      <img id='homepage-background' src='assets/image/homepage.jpg' />
    </body>
  )
}