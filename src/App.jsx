import { RecoilRoot } from 'recoil'
import Slider from './components/Slider'
import { Footer } from './components/Footer'
import React, { useRef, useState } from 'react';
import { Gallery } from './components/Gallery'
import { Navbar } from './components/Navbar';
import { Particle } from './components/Particle';


export default function App() {
  return (
    <div>
      <RecoilRoot>
        {/* <Slider/> */}
        {/* <Footer/> */}
        {/* <Gallery></Gallery> */}
        {/* <Navbar></Navbar> */}
      </RecoilRoot>
    </div>
  )
}
