import React, { Component } from 'react'
import NumberConverter from './system/NumberConverter'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

export default class App extends Component {
  constructor(props) {
    super(props);
    // State yaratish
    this.state = {
      message: 'Assalomu alaykum!',
    };
  }


  render() {
    return (
      <>
        <Navbar />
        <header>
          <div className="convert_body">
             <Sidebar />
             <div className="main_body">
               
        <NumberConverter />
             </div>
          </div>
        </header>
      </>
    )
  }
}
