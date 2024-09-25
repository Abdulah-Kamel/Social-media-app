import React from 'react'
import Container from '../../Components/ui/Container'
import ProfileHeader from '../../Components/ui/Profile/ProfileHeader'
import About from '../../Components/ui/Profile/About'
import ProfileGallery from '../../Components/ui/Profile/ProfileGallery'

const index = () => {
  return (
    <Container customeStyle={"py-12 px-8"}>
        <ProfileHeader/>
        <About/>
        <ProfileGallery/>
    </Container>
  )
}

export default index