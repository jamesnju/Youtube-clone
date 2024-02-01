import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Route,Routes } from 'react-router-dom';
import Shorts from '../Pages/Shorts';
import Home from '../Pages/Home';
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";



import './Left2.css';

const Left = () => {
    const Sidebaricons=[{
        name: "Home",
        icon: AiFillHome,
    },
    {
        name: "Shorts",
        icon: SiYoutubeshorts,
    },{
        name: "Subscriptions",
        icon: MdSubscriptions,
    },{
        name: "Home",
        icon: AiFillHome,
    },{
        name: "Home",
        icon: AiFillHome,
    },{
        name: "Home",
        icon: AiFillHome,
    },{
        name: "Home",
        icon: AiFillHome,
    },
]
return (
    <>
        <Navbar expand="lg" className="leftnav d-flex">
            <Container  fluid>
                {/* <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll"> */}
                <Nav className="items" navbarScroll>
                    <Nav.Link as={Link} to='/home'><AiFillHome />Home</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'><SiYoutubeshorts />Shorts</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'><MdSubscriptions />Subscriptions</Nav.Link>
                    <h2>You</h2>
                    <Nav.Link as={Link} to='/shorts'>Your Channel</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'>History</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'>Your videos</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'>Watch later</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'>Downloads</Nav.Link>
                    <Nav.Link as={Link} to='/shorts'>Liked videos</Nav.Link>
                    <h1>Subscriptions</h1>
                    <h2>Explore</h2>
                    <h2>More From YouTube</h2>
                    <p>YouTube Premium</p>
                    <p>YouTube Studio</p>
                    <p>YouTube Kids</p>
                    <p>YouTube Music</p>
                    <h3>Settings</h3>
                    <p>Report History</p>
                    <p>Help</p>
                    <p>Send feedback</p>
                </Nav>
                {/* </Navbar.Collapse> */}
            </Container>
    </Navbar>
    </>
  )
}

export default Left