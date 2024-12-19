import React from 'react'
import Hero from "../components/Hero"
import HomeCards from '../components/Homecards'
import JobListing from "../components/JobListing"
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards />
    <JobListing  isHome={true} />
    <ViewAllJobs />
    </>
  )
}

export default HomePage