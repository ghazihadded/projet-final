import React from "react";

import "./NavBar.css";




 const ProfileNav = () => {
  return (
    <header>
    <nav class="navbar navbar-default">
      <div class="navbar-header">
        <a class="navbar-brand" href="/">
          <i class="fa fa-cube"></i>Brand<b>Name</b>
        </a>
        <button
          type="button"
          data-target="#navbarCollapse"
          data-toggle="collapse"
          class="navbar-toggle"
        >
          <span class="navbar-toggler-icon"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a
              href="/"
              data-toggle="dropdown"
              class="dropdown-toggle user-action"
            >
              <img
                src="https://www.tutorialrepublic.com/examples/images/avatar/2.jpg"
                class="avatar"
                alt="Avatar"
              />{" "}
              Paula Wilson <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a href="/">
                  <i class="fa fa-user-o"></i> Profile
                </a>
              </li>
             
              
              <li class="divider"></li>
              <li>
                <a href="/">
                  <i class="material-icons">&#xE8AC;</i> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    </header>
  );
};


export default ProfileNav