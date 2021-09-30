import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";
import React, { Component } from 'react'


export default function Nav() {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a href="/" class="navbar-brand" id="type-logo"><strong>Investment Society</strong> Imperial College London</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>

       <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="navbar-item ">
                <Link to="/" class="nav-link ">Home</Link>
              </li>
              <li class="navbar-item">
                <Link to="/impactinvesting" class="nav-link">IIC 2021</Link>
              </li>
              <li class="navbar-item">
                <Link to="/team" class="nav-link">Team</Link>
              </li>
              <li class="navbar-item">
                <Link to="/partners" class="nav-link">Partners</Link>
              </li>
              <li class="navbar-item">
                <Link to="/SEC" class="nav-link">SEC</Link>
              </li>
              <li class="navbar-item ">
              <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">QT Capital  </Link>
                   <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Inbox</a>
                        <a href="#" class="dropdown-item">Drafts</a>
                         <a href="#" class="dropdown-item">Sent Items</a>
                            
               </div>
              
   
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}