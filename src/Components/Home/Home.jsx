import React from 'react'
import { Slider } from '../Slider/Slider'
import { AboutUsSummary } from '../AboutUs/AboutUsSummry'
import { ContactUsSummary } from '../ContactUS/ContactUsSummry'

export const Home = () => {
  return (
    <>
        <Slider />
        <AboutUsSummary />
        <ContactUsSummary />
    </>
  )
}
