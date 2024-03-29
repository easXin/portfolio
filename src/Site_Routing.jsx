import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import HeaderComponnet from './components/header/NavBar_Header'

import HomeComponent from './components/body/sections/home/Home'
import AboutComponent from './components/body/sections/about/About'
import ContactComponent from './components/body/sections/contact/Contact'
import ProjectComponent from './components/body/sections/project/Project'
import ResumeComponent from './components/body/sections/resume/Resume'
import ErrorComponent from './components/body/sections/error/Error'

import FooterComponent from './components/footer/CopyRight_Footer'

export default function RoutingComponent() {
  return (
    <Router>
       <HeaderComponnet/>
       <Routes>    
            <Route path="/" element={<HomeComponent/>}/>
            <Route path="/portfolio" element={<HomeComponent/>}/>
            <Route path="/home" element={<HomeComponent/>}/>
            <Route path="/about" element={<AboutComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/project" element={<ProjectComponent/>}/>
            <Route path="/resume" element={<ResumeComponent/>}/>
            <Route path="*" element={<ErrorComponent/>}/>     
       </Routes>
       <FooterComponent/>
    </Router>
  )
}
