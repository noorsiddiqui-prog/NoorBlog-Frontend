import { Circle } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import styles from './detailcard.module.scss'
import EditIcon from '@mui/icons-material/Edit'

const DetailCard = ({ data }) => {
  const {
    title,
    image,
    IconImage,
    nameTitle,
    subDate,
    subTime,
    id,
    desc,
  } = data
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        // key={id}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          width: '80%',
          padding: '20px 16px',
          boxShadow: '32px 32px 48px #d4d4d4,-32px -32px 48px #ffffff',
          minHeight: '1200px',
          background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            ml: '10%',
          }}
        >
          <Box>
            <img
              // src="./assets/images/Article_Image1.svg"
              src={image}
              alt=""
              width="100%"
              height="auto"
            />
          </Box>
        </Box>

        <Box sx={{ mt: '530px', ml: '10%' }}>
          <Typography
            sx={{
              fontSize: '36px',
              fontWeight: '600',
              fontFamily: 'Plus Jakarta Sans',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', mt: '20px' }}>
              <Box sx={{ width: '47px', height: '57px', borderRadius: '50%' }}>
                <img src={IconImage} alt="" width="100%" height="auto" />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  ml: '10px',
                }}
              >
                <Typography class={styles.bodyTypo2}>{nameTitle}</Typography>
                <Box sx={{ display: 'flex', textAlign: 'center' }}>
                  <Typography class={styles.bodysubTypo}>{subDate} </Typography>
                  <Box sx={{ ml: '10px', mr: '10px', alignItems: 'center' }}>
                    <Circle
                      sx={{
                        width: '6px',
                        height: '6px',
                        mb: '4px',
                        color: '#9d9ea2',
                      }}
                    />
                  </Box>
                  <Typography class={styles.bodysubTypo}>{subTime}</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mr: '10%' }}>
              <IconButton
                sx={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#e1e0e0',
                  borderRadius: '50%',
                }}
              >
                <EditIcon sx={{ fontSize: '24px', color: 'red' }} />
              </IconButton>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              fontFamily: 'Plus Jakarta Sans',
              mt: '20px',
              mr: '10%',
              color: '#68696c',
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailCard
