import React from 'react'
import BodyCard from '../../BodyCards/BodyCard'
import { Box, Grid } from '@mui/material'

const categoryCardData = [
  {
    title: 'Fundamental of javascript',
    image: './assets/images/Article_Image1.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 1,
  },
  {
    title: 'Grid CSS make your life easier',
    image: './assets/images/Article_Image2.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 2,
  },
  {
    title: 'Make animated light mode and dark mode toggle with CSS',
    image: './assets/images/Article_Image3.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 3,
  },
  {
    title: 'Make tic tac toe games with react JS',
    image: './assets/images/Article_Image4.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 4,
  },
  {
    title: 'Flexbox CSS : Everything you need to know',
    image: './assets/images/Article_Image5.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 5,
  },
  {
    title: 'Grid CSS make your life easier',
    image: './assets/images/Article_Image6.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 6,
  },
  {
    title: '3 easy way to make div center',
    image: './assets/images/Article_Image7.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 7,
  },
  {
    title: 'Make animated light mode and dark mode toggle with CSS',
    image: './assets/images/Article_Image8.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 8,
  },
  {
    title: 'array in javasript - Learn JS #3',
    image: './assets/images/Article_Image9.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 9,
  },
  {
    title: 'Fundamental of javascript',
    image: './assets/images/Article_Image10.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 10,
  },
  {
    title: '7 project with javascript you must try for your portfolio',
    image: './assets/images/Article_Image11.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 11,
  },
  {
    title: 'make simple calculator with javascript',
    image: './assets/images/Article_Image12.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 12,
  },
  {
    title: 'first month of leaning react jS',
    image: './assets/images/Article_Image13.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 13,
  },
  {
    title: 'build markdown editor with react JS',
    image: './assets/images/Article_Image14.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 14,
  },
  {
    title: 'getting started with react JS',
    image: './assets/images/Article_Image15.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 15,
  },
  {
    title: 'Make tic tac toe games with react JS',
    image: './assets/images/Article_Image16.svg',
    IconImage: './assets/images/Ellipse 80.svg',
    nameTitle: 'Noor Siddiqui',
    subDate: 'Jan 10, 2022',
    subTime: '3 min read',
    id: 16,
  },
]

const CategoryCards = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          {categoryCardData.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={4} sm={6} xs={12} lg={4}>
                  <BodyCard data={item} key={index} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
    </div>
  )
}

export default CategoryCards
