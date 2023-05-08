import { Box, Grid } from '@mui/material'
import React from 'react'
import DetailCard from './DetailCard'

const DetailPageComp = () => {
  const detailCardData = [
    {
      title: 'Fundamental of javascript',
      image: './assets/images/Article_Image1.svg',
      IconImage: './assets/images/Ellipse 80.svg',
      nameTitle: 'Noor Siddiqui',
      subDate: 'Jan 10, 2022',
      subTime: '3 min read',
      id: 1,
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]
  return (
    <Box>
      <Box style={{ paddingTop: '100px', paddingBottom: '100px' }}>
        <Grid container>
          {detailCardData.map((item, index) => {
            return (
              <>
                <Grid spacing={2} item md={12} sm={12} xs={12} lg={12}>
                  <DetailCard data={item} />
                </Grid>
              </>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}

export default DetailPageComp
