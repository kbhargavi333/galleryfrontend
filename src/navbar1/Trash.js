import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaLeaf} from 'react-icons/fa'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const UserList = () => {
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    axios.get('https://gallerybackend-i7yf.onrender.com/delusers')
      .then(response => {
        setUsers(response.data);
      }) 
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2 className='displayword'>Bring back your memories</h2>
        {users.map(user => (
          <div className='displaydiv' key={user._id}>
           <img className='displayimg' src={user.delimage} alt="User" width={400} />
           <p className='displaytext'>{user.deltext}</p>
           
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
