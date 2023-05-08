import { Box } from '@mui/material'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Box>{children}</Box>
      <Box>
        <Footer />
      </Box>
    </div>
  )
}

export default Layout
