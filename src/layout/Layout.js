// Webpage layout
import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'

export const Layout = ({children}) => {
  return (
    <Container>
     <Header/>
     <title>Gurudeta Singh Portfolio</title>
     <main>{children}</main> 
     <Footer/>
    </Container>
  )
}
