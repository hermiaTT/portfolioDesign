import React from 'react';
import Headers from '../../containers/header';
import Graphic from '../../containers/graphic';
import Interior from '../../containers/interior';
import Branding from '../../containers/branding';
import Digital from '../../containers/digital';
// import '../../App.css';
const Home = (props) => {
  return (
    <div className='App-Content'>
        <Headers />
        <Interior />
        <Branding />
        <Digital />
        <Graphic/>
    </div>
  )
}

export default Home;