import React, { useState } from 'react'
import './left.css';
import Left from './Left';
import Nav from 'react-bootstrap/Nav';
import { IoMdMenu } from "react-icons/io";
import { Link, Route,Routes } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import Center from '../Pages/Center';
import CenterPlay from '../Pages/CenterPlay';


const LeftSide = () => {
    const [toggle, setToggle] = useState(true);
  return (
    <div className='container-fluid'>
        <div className="row">
                <h1 onClick={()=>{setToggle(!toggle)}}><IoMdMenu/></h1>
                {toggle ?
                <div className="col-md-3 ">
                <Left/>
                </div> :<div className='col-md-1  bg-info m fw-normal hiddentoggle' >
                  
                    <Nav.Link as={Link} to='/home'><AiFillHome />Home</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'><SiYoutubeshorts />Shorts</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'><MdSubscriptions />Subscriptions</Nav.Link>
                </div>} 
            <div className="col-md-5 centerside align-items-center bg-secondary justify-center text-center">
                <CenterPlay/>
            </div>
            <div className="col-md-4 rightside">
                <Center/>
            </div>
        </div>
    </div>
  )
}

export default LeftSide