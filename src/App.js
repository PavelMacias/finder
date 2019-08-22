import React, {Fragment,Component} from 'react';
import Navbar from './components/layouts/Navbar';
import './App.css';


class App extends Component {
  render(){
    //lo del navbar son props para trabajar con clases
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    );
  }
}

export default App;
