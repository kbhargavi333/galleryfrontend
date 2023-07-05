import { Nav, Navbar, NavLink } from "react-bootstrap";
import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUpload} from 'react-icons/bi';
import {MdOutlinePhotoSizeSelectActual} from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai';
import {BsTrash} from 'react-icons/bs'
import {FaLeaf} from 'react-icons/fa'

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Collapse id="navbarScroll">
    <Nav>
      <div className="container">
          <h1 className="title"><FaLeaf/>&nbsp;MemoraVerse</h1>
           <p><NavLink  eventKey="1" as={Link} to="/"><AiOutlineHome/>&nbsp;Home</NavLink></p> 
           <p><NavLink  eventKey="2" as={Link} to="/upload"><BiUpload/>&nbsp;Upload</NavLink></p> 
           <p><NavLink  eventKey="3" as={Link} to="/photos"><MdOutlinePhotoSizeSelectActual/>&nbsp;Photos</NavLink></p>
           <p><NavLink  eventKey="4" as={Link} to="/favourites"><AiOutlineStar className="icon"/>&nbsp;Favourites</NavLink></p>
           <p><NavLink  eventKey="5" as={Link} to="/Trash"><BsTrash/>&nbsp;Trash</NavLink></p>
           <Link to='https://loginfrontend-170q.onrender.com' className="logout">Logout</Link>
      </div>
    </Nav>
    </Navbar.Collapse>    
    </Navbar>
  )
}


