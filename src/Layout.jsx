import React from 'react'

import {Footer} from './Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from './NavBar/Navbar'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
