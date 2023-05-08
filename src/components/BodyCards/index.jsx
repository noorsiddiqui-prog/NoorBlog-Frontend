import React from 'react'
import BodyCard from './BodyCard'
import { Box, Grid } from '@mui/material'
import TwoTitleHeaders from './../TwoTitleHeaders/index'

const bodyCardData = [
  {
    title: 'Fundamental of javascript',
    image: './assets/images/Article_Image1.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Grid CSS make your life easier',
    image: './assets/images/Article_Image2.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Make animated light mode and dark mode toggle with CSS',
    image: './assets/images/Article_Image3.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Make tic tac toe games with react JS',
    image: './assets/images/Article_Image4.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
]
const bodyCardData2 = [
  {
    title: 'Flexbox CSS : Everything you need to know',
    image: './assets/images/Article_Image5.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Grid CSS make your life easier',
    image: './assets/images/Article_Image6.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: '3 easy way to make div center',
    image: './assets/images/Article_Image7.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Make animated light mode and dark mode toggle with CSS',
    image: './assets/images/Article_Image8.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
]
const bodyCardData3 = [
  {
    title: 'array in javasript - Learn JS #3',
    image: './assets/images/Article_Image9.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Fundamental of javascript',
    image: './assets/images/Article_Image10.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: '7 project with javascript you must try for your portfolio',
    image: './assets/images/Article_Image11.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'make simple calculator with javascript',
    image: './assets/images/Article_Image12.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
]
const bodyCardData4 = [
  {
    title: 'first month of leaning react jS',
    image: './assets/images/Article_Image13.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'build markdown editor with react JS',
    image: './assets/images/Article_Image14.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'getting started with react JS',
    image: './assets/images/Article_Image15.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
  {
    title: 'Make tic tac toe games with react JS',
    image: './assets/images/Article_Image16.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
  },
]

const BodyCards = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        paddingTop: '60px',
        paddingLeft: '36px',
        paddingRight: '36px',
      }}
    >
      <Box>
        <Box>
          <TwoTitleHeaders
            title1={'Featured Article'}
            title2={'See All Articles'}
          />
        </Box>
        <Grid container spacing={2}>
          {bodyCardData.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={3} sm={6} xs={12} lg={3}>
                  <BodyCard data={item} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>

      <Box sx={{ mt: '40px' }}>
        <Box>
          <TwoTitleHeaders title1={'CSS'} title2={'See All Articles'} />
        </Box>
        <Grid container spacing={2}>
          {bodyCardData2.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={3} sm={6} xs={12} lg={3}>
                  <BodyCard data={item} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
      <Box sx={{ mt: '40px' }}>
        <Box>
          <TwoTitleHeaders title1={'Javascript'} title2={'See All Articles'} />
        </Box>
        <Grid container spacing={2}>
          {bodyCardData3.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={3} sm={6} xs={12} lg={3}>
                  <BodyCard data={item} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
      <Box sx={{ mt: '40px' }}>
        <Box>
          <TwoTitleHeaders title1={'React Js'} title2={'See All Articles'} />
        </Box>
        <Grid container spacing={2}>
          {bodyCardData4.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={3} sm={6} xs={12} lg={3}>
                  <BodyCard data={item} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default BodyCards
