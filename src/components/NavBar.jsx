import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="./assets/img/logo.svg" 
            alt="" width="30" height="24" class="d-inline-block align-text-top"/>
            Bootstrap
          </a>
        </div>
    </nav>
    )
  }
}
