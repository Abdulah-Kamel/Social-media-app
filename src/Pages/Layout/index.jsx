import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar'

const index = () => {
  return (
    <section className="min-h-screen flex">
    <NavBar className="columns-6"/>
    <Outlet className="columns-6"/>
    </section>
  )
}

export default index