import React from 'react'
import  Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import Joblistings from '../components/Joblistings'
import ViewAllJobs from '../components/ViewAllJobs'


const Homepage = () => {
  return (
   <>
    <Hero/>
    <HomeCards/>
    <Joblistings/>
    <ViewAllJobs/>
    
    </>
  )
}

export default Homepage