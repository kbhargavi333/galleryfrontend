import React from 'react';
import { FaLeaf } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { AiFillGoogleCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react';
export default function Upload() {

  const [image, setimage] = useState(null);
  // const [text, settext] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [words,setwords]=useState('');
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setimage(file);
  };
  const handleChange = (e) => {
    setwords({
      [e.target.name]: e.target.value,
    });
  };
  

  const uploadImage = async () => {
    window.alert("Image uploaded,check on photos")
    let imgurlfromapi = "";
    const data = new FormData()
    data.append("resource_type", image.type && image.type.includes("image") ? "image" : "video");
    data.append("file", image)
    data.append("upload_preset", "gallery")
    data.append("cloud_name", "dwttfsaxa")

    const apiURL = image.type.includes("image")
      ? "https://api.cloudinary.com/v1_1/dwttfsaxa/image/upload"
      : "https://api.cloudinary.com/v1_1/dwttfsaxa/video/upload";
    await fetch(apiURL, {
      method: "POST",
      body: data
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.url);
        imgurlfromapi = data.url;
      }).catch((err) => {
        console.log(err)
      })
    console.log("backend")
    console.log(imageUrl);

    await axios.post("https://gallerybackend-i7yf.onrender.com/store", { image: imgurlfromapi,text:words })
      .then((res) => {
        console.log(words)
        console.log(res.data);
        console.log("Successfully stored the image in MongoDB");
      })
      .catch((error) => {
        console.error("Error storing the image in MongoDB:", error);
      });
  }
 
  return (
    <div className='upload'>
      <h1 className='word'>What you want to upload?</h1>
      <div className='uploadmain'>
        <label className='photolabel' ><b>Select a Photo/Video:</b></label>
        <p><input type="file" id="fileInput" accept="image/*, video/*" onChange={handleFileChange}></input></p>
      </div>
      <h2 className='word1'>wanna write a memory?</h2>
      <div className='text'>
        <textarea rows="10" cols="50" className="textarea" name='words' placeholder='make your memories store' onChange={(e)=>{setwords(e.target.value)}}></textarea>
      </div>
      <div className='buttoncontainer'>
        <button className="uploadbutton" onClick={uploadImage}>Upload</button>
      </div>
      <footer className="footer">
        <a href='/' target="blank"><FaInstagramSquare className='icon' /> </a>
        <a href='/' target='blank'><FaFacebook className='icon' /> </a>
        <a href='/' target='_blank'><BsTwitter className='icon' /> </a>
        <a href='/' target='_blank'><AiFillGoogleCircle className='icon' /> </a>
        {/* <hr class="footer-line"/> */}
        <div className='footerhead'>
          <h2>Contact us:</h2>
          <h4 className="mobile">Mobile: +91 7895421386</h4>
          <h4>Email: mermoraverse@gmail.com</h4>
          <h1 className="title"><FaLeaf />&nbsp;MemoraVerse</h1>
        </div>
      </footer>
    </div>
  )
}

