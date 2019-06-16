import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import './App.css';

const particlesOptions = {

                particles: {
                  number: {
                    value: 69,
                    desnity: {
                      enable:true,
                      value_area:800
                    }
                  }
              }
            }


class App extends Component {
  constructor(){
    super();
    this.state = {
      route: 'home',
      isSignedIn: false
    }
  }
  
  onRouteChange= (route1) => {
    if(route1 === 'signout') {
      this.setState({isSignedIn:false,route:'home'})
    }
    else if(route1 === 'home')
    {
      this.setState({isSignedIn: true,route:'home'})
    }
    else if(route1=== 'home1')
    {
      this.setState({isSignedIn:false, route:'home'})
    }
    else if(route1 === 'about1')
    {
      this.setState({isSignedIn: false,route: 'about'})
    }
    else if(route1 === 'about')
    {
      this.setState({isSignedIn: true,route: 'about'})
    }
    else {
    this.setState({route: route1});
    }
   } 

render(){
  const {isSignedIn,route} = this.state;
  return (
     <div className="App">
       <Particles className='particles' params={particlesOptions}/>  
      <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
      { route === 'home' 
       ?
       <Home />
       : (
          route === 'signin'
          ? <Signin  onRouteChange={this.onRouteChange}/>
          : ( 
              route ==='about' 
              ? <About isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
              :<Register onRouteChange={this.onRouteChange} />
        )
          )
      }
   </div>
    );
  }
}

export default App;