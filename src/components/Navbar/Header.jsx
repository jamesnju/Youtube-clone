import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import { CiMicrophoneOn } from "react-icons/ci";
import Logo  from '../images/logo.jpg'
import Profile from '../images/profile.jpg';
import { IoMdNotifications } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineEmergencyRecording } from "react-icons/md";

const Header = () => {
  return (
    <div className='container-fluid main'>
      <div className="row nav d-flex align-items-center">
        <div className="col-md-3 col-12 col-sm-3 align-items-center d-flex  logo">
          <img src={Logo} alt="" /><h3>YouTube</h3><sup>KE</sup>
        </div>
        <div className=" searchbar col-md-5 col-12 col-sm-4  align-items-center d-flex gap-2rem">
          <input type="search" className="form-control" placeholder='Search..'/>
          <h2 className='searchIcon col-sm-2'><IoIosSearch /></h2>
          <h1><CiMicrophoneOn /></h1>
        </div>
        <div className="col-md-4 col-12 col-sm-4 align-items-center d-flex pro">
        <h2><MdDarkMode /></h2>
        <h2><MdOutlineEmergencyRecording /></h2>
        <h2><IoMdNotifications /></h2>
          <img src={Profile} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header