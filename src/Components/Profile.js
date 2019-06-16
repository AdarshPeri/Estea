import React from 'react';

const Profile = ({onRouteChange})=>{


return(
<section className="vh-100  baskerville">
  <header className="tc ph5 lh-copy">
      <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight yellow">404</h1>
      <h2 className="tc f1-l fw1">Sorry, we are still building the Profile</h2>
  </header>
  <p className="fw1 i tc mt4 mt5-l f4 f3-l">You could try one of these dummies</p>
   <ul className="list tc pl0 w-100 mt5">
    <li className="dib"><p onClick={() => onRouteChange('home')} className="f5 f4-ns link black db pv2 ph3 hover-white" >Home</p></li>
  </ul>
</section>
);
}



export default Profile;