import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {AiFillGoogleCircle} from 'react-icons/ai'
import {FaLeaf} from 'react-icons/fa'

// import {Routes, Route, BrowserRouter,Router,useLocation} from 'react-router-dom';
// // import {useHistory} from 'react-router-dom';
// import {useNavigate,} from 'react-router-dom';
// import About from './nav/About'
// import { Link } from 'react-router-dom'
// import {Button} from '@material-ui/core/Button';
export default function App() {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const redirectToAnotherPage = () => {
  //   window.location.href = 'https://frontend-t7er.onrender.com/';
  // };
    // const history = useHistory();
    // const redirectToAnotherPage = () => {
    //   history.push('/another-page');
    // };

  return (
          <div className='mainpage'>
            <div className='images'>
              <img className='img1' src="https://www.southernliving.com/thmb/NyH4_BFwiipyO6NtQ7eCEEBM_7I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gettyimages-452801727-2000-84872d7cb16d4bbdb163782ffb9f4b42.jpg"/>
              <img className='img4' src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F08%2F11%2FNever-Have-I-Ever-081122.jpg"/>
              <img className='img5' src="https://e1.pxfuel.com/desktop-wallpaper/970/823/desktop-wallpaper-midnight-memories-%E2%99%A1-midnight-memories-one-direction.jpg"/>
              <h2>Preserve the Moments of your Life</h2>
              <p className='redirect'><button className='mbutton' ><Link to='/Photos' >Step in to your memories</Link></button></p>
              {/* <Routes>
                <Route path="/About" element={<About/>}/>
              </Routes> */}
              <img className='img2' src='https://cdn0.weddingwire.in/article/3016/3_2/1280/jpg/56103-mother-daughter-dresses-for-wedding-anita-dongre-cream-pairing.jpeg'/>
              <img className='img3' src='https://assistinghands.com/106/wp-content/uploads/sites/149/2022/09/Elderly-Couple-on-Sofa.jpg'/>
              <img className='img6' src='https://www.india.com/wp-content/uploads/2023/02/sid-kiara-wedding-2.jpg'/> 
              </div>
              <div>
                <h2>Preserving memories</h2>
            
                <h3>Honor your passed loved ones</h3>
                <div className='container1'>
                    <p class="ptag">The importance of memories cannot be overstated when it comes to preserving the legacy of a loved one who has passed away. Whether they're
                   captured in photos, video, audio, the written word, or in the  form of physical objects, preserving those memories helps famil and friends
                    honor their loved  ones for years to come.</p>
                    <img id='img' src='https://st2.depositphotos.com/2117297/5594/i/600/depositphotos_55948991-stock-photo-mother-spending-time-with-daughter.jpg'/>
                </div>
                <h3>Commemerate special events</h3>
                <div className='container1'>
                    <p class="ptag">Memories preserved in a home video on VHS are at the mercy of how well the technology holds up. VHS tapes can get damaged and discolored over 
                    time if exposed to heat, moisture, or if broken. VCR players are not as widely available as they once were. Even DVDs are being phased out. Transferring these memories 
                    in to digital lives longer.</p>
                    <img id='img' src='https://amendo.com/wp-content/uploads/2021/10/bigstock-African-Family-Watching-Tv-Mov-417110977.jpg'/>
                </div>
                <h3>Keep your find memories close</h3>
                <div className='container1'>
                    <p class="ptag">When you leave a place, and no longer have the daily reminders of the people from that environment, memories begin to fade. It’s just how our brains work 
                    to keep us focused on the present day’s immediate needs. Sometimes we have to leave a place, or a group of cherished friends, and we wish we could take them with us.
                     Preserving those memories helps us do just that. .</p>
                    <img id='img' src='https://previews.123rf.com/images/derausdo/derausdo0702/derausdo070200006/738432-vintage-handwriting-from-old-letter.jpg'/>
                </div>
                <h3>Echoes of yesterday </h3>
                <div className='container1'>
                    <p class="ptag">Important memories are created at events like birthdays, anniversaries, weddings, and graduations. Memories preserved in the form of photos, video or through 
                    another medium can also be shared during these events, too. What better time than when friends and family are all together?.</p>
                    <img id='img' src='https://cdn.firstcry.com/education/2022/09/21150110/Activities-With-Family-Photo-Albums.jpg'/>
                </div>
                <h3>Make your life project</h3>
                <div className='container1'>
                    <p class="ptag">Taking photos of vacations, holidays, and everyday life is one of the best ways to preserve memories. It’s easier than ever to snap photos on your smartphone 
                    and organize them within your device. To take it to the next level,There’s just something about holding 
                    a physical photo album in your hands and passing it around to share with friends and family.</p>
                    <img id='img' src='https://imgv3.fotor.com/images/blog-richtext-image/Family-photo-collage-ideas.png'/>
                </div>
                {/* <a href='Home.js' className='navbarbutton'>Back to Navbar</a> */}
                {/* <Link to='/' className='navbarbutton' >Back to Navbar</Link> */}
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

                {/* <BsInstagram /> */}
              {/* <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul> */}
            </div>
          </div>
    
  )
}

