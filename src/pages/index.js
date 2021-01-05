import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import {
  HomeObjOverview,
  HomeObjDataAccess,
  HomeObjNotebooks,
  HomeObjData,
  HomeObjCitation,
} from '../components/InfoSection/data'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection></HeroSection>
      <InfoSection {...HomeObjOverview}></InfoSection>
      <InfoSection {...HomeObjDataAccess}></InfoSection>
      <InfoSection {...HomeObjData}></InfoSection>
      <Catalog></Catalog>
      <InfoSection {...HomeObjNotebooks}></InfoSection>
      <InfoSection {...HomeObjCitation}></InfoSection>
      <Footer></Footer>
    </>
  )
}

export default Home
