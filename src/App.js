import React, { Component } from 'react'
import Home from './navbar1/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navigation from './navbar1/Navigation'
import Photos from './navbar1/Photos'
import Favourites from './navbar1/Favourites'
import Trash from './navbar1/Trash'
import Upload from './navbar1/Upload'
import './App.css'
import './index.css'
export default class App extends Component {
  render() {
    return (
      <div>
        {/* Hello */}
        <BrowserRouter>
        <Navigation/>
          <Routes>  
            <Route path="/" element={<Home/>} />
            <Route path="/upload" element={<Upload/>} />
            <Route path="/photos" element={<Photos/>} />
            <Route path="/favourites" element={<Favourites/>} />
            <Route path="/trash" element={<Trash/>} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
