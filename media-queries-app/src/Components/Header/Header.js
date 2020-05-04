import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
         menuStatus: 'drop-down-default'
      }
      this.toggleMenuStatus = this.toggleMenuStatus.bind(this);
   }
   toggleMenuStatus() {
      console.log('hit')
      if (this.state.menuStatus === 'drop-down-menu-open') {
         this.setState({
            menuStatus: 'drop-down-menu-closed'
         }) 
      } else {
         this.setState({
            menuStatus: 'drop-down-menu-open'
         })
      }
   }
   render() {
      return (
         <header id='container-header-site'>
            <div id='header-site'>
               <nav id='nav-site'>

                  <a href='#' id='title-site'>
                     Start Bootstrap
                  </a>

                  <span id='menu-responsive'>
                     <button id='menu-site-ham' onClick={this.toggleMenuStatus}>MENU&#9776;</button>

                     <ul id='menu-site' className={this.state.menuStatus}>
                        <li className='menu-items'>SERVICES</li>
                        <li className='menu-items'>PORTFOLIO</li>
                        <li className='menu-items'>ABOUT</li>
                        <li className='menu-items'>TEAM</li>
                        <li className='menu-items'>CONTACT</li>
                     </ul>
                  </span>

               </nav>
               <div id='container-welcome-message'>
                  <p id='welcome-message-wc'>
                     Welcome To Our Studio!
                  </p>
                  <p id='welcome-message-ntmy'>
                     IT'S NICE TO MEET YOU
                  </p>
                  <button id='more-info-btn' className='text-uppercase'>
                     Tell me more
                  </button>
               </div>
            </div>
         </header>
      );
   }
}