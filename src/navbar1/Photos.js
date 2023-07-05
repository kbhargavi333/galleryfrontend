import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {AiOutlineStar} from 'react-icons/ai'
import {BiTrash} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaLeaf} from 'react-icons/fa'
import Favourites from './Favourites'
const UserList = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    axios.get('https://gallerybackend-i7yf.onrender.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFav = ( imageUrl, text) => {
    return async () => {
      try {
        const response = await axios.post("https://gallerybackend-i7yf.onrender.com/favstore", {
          favimage: imageUrl,
          favtext: text
        });
        console.log(text);
        console.log(response.data);
        console.log("Successfully stored the image in MongoDB");
      } catch (error) {
        console.error("Error storing the image in MongoDB:", error);
      }
    };
  };
  const handledel = (imageurl,text,id) => {
    return async () => {
      try {
        const response1 = await axios.delete(`https://gallerybackend-i7yf.onrender.com/users/${id}`);
        const response = await axios.post('https://gallerybackend-i7yf.onrender.com/delstore',{
          delimage:imageurl,
          deltext:text
        });
        console.log(response1.data);
        console.log("User deleted successfully");
        // Refresh the user list or update state after successful deletion
      } catch (error) {
        console.error("Error deleting the user:", error);
      }
    };
  };
  

  return (
    <div>
      <h2 className='displayword'>Bring back your memories</h2>
        {users.map(user => (
          <div className='displaydiv' key={user._id}>
           <img className='displayimg' src={user.image} alt="User" width={400} />
           <p className='displaytext'>{user.text}</p>
           <div className='iconcontainer'>
            <Link to="" onClick={handleFav(user.image,user.text)} className='displaylink'><AiOutlineStar className='displayicon1'/></Link>
            <Link to="" className='displaylink' onClick={handledel(user.image,user.text,user._id)} ><BiTrash className='displayicon2'/></Link>
          </div>
          </div>
        ))}
        <footer class="footer">
                  <a href='' target="blank"><FaInstagramSquare className='icon'/> </a>
                  <a href='' target='blank'><FaFacebook className='icon'/> </a>
                  <a href='' target='_blank'><BsTwitter className='icon'/> </a>
                  <a href='' target='_blank'><AiFillGoogleCircle className='icon'/> </a>
                  {/* <hr class="footer-line"/> */}
                  <div class='footerhead'>
                  <h2>Contact us:</h2>
                  <h4 class="mobile">Mobile: +91 7895421386</h4>
                  <h4>Email: mermoraverse@gmail.com</h4>
                  <h1 className="title"><FaLeaf/>&nbsp;MemoraVerse</h1>
                  </div>
                </footer>
    </div>
  );
};

export default UserList;
