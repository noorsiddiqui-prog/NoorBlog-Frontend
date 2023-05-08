import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styles from './card.module.scss'

const Card = () => {
  const cardData = [
    {
      title: 'CSS',
      icon: './assets/icons/Frame 291.svg',
    },
    {
      title: 'JavaScript',
      icon: './assets/icons/Javascript.svg',
    },
    {
      title: 'Tailwind',
      icon: './assets/icons/logos_tailwindcss-icon.svg',
    },
    {
      title: 'React Js',
      icon: './assets/icons/reactjs.svg',
    },
    // {
    //   title: 'Python',
    //   icon: './assets/icons/python-seeklogo.com.svg',
    // },
  ]

  return (
    <>
      <Grid container spacing={2}>
        {cardData.map((item, index) => {
          return (
            <>
              <Grid item xs={12} md={3} lg={3}>
                <Box class={styles.cardBg}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: '38px',
                        height: '57px',
                        alignSelf: 'center',
                      }}
                    >
                      <img
                        src={item.icon}
                        alt=""
                        srcset=""
                        width="100%"
                        height="auto"
                      />
                    </Box>
                    <Box>
                      <Typography class={styles.cardTypo}>
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </>
          )
        })}
      </Grid>
    </>
  )
}

export default Card
