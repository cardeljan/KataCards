import React, { Component } from 'react'
import { firebaseConnect, authConnect } from 'fire-connect'

import firebase, { auth } from '../firebase'
import { Navbar, Button, Icon } from 'react-materialize'
import { NavLink, withRouter } from 'react-router-dom'
import './Nav.css'
import UpdateGold from './Users/UpdateGold';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    auth.signOut()
  }

  render() {
    if (this.props.user) {
      return (
        <Navbar brand="Kata Cards" right>
          <li className='middle'>
            <UpdateGold authUser={this.props.authUser} />
          </li>
          <li>
            <NavLink to="/cardstore">Buy Cards</NavLink>
          </li>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/logout" onClick={this.handleClick}>
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          {/* <Icon>search</Icon> */}
        </Navbar>
      )
    }
    return (
      <Navbar brand="Kata Cards" right>
        <li>
          <NavLink to="/login">Login/Signup</NavLink>
        </li>
        {/* <Icon>search</Icon> */}
      </Navbar>
    )
  }
}

export default authConnect()(withRouter(Nav))
