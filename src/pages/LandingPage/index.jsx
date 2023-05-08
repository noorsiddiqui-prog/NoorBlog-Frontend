import React from 'react'
import HeroSection from './../../components/HeroSection/index'
import { Box, Button } from '@mui/material'
import BrowseTheCategory from '../../components/BrowseTheCategory'
import BodyCards from '../../components/BodyCards'
import AdvertisementBox from '../../components/AdvertisementBox'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <Box>
        <BrowseTheCategory />
      </Box>
      <Box>
        <BodyCards />
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: '80px',
          mb: '80px',
        }}
      >
        <Button
          sx={{
            backgroundColor: '#6246EA',
            width: '165px',
            height: '64px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '700',
            borderRadius: '8px',
            textTransform: 'capitalize',
          }}
        >
          More Articles
        </Button>
      </Box>

      <Box>
        <AdvertisementBox />
      </Box>
    </div>
  )
}

export default LandingPage
