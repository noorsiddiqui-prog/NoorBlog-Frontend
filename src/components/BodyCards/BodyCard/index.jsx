import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './bodycard.module.scss'
import { Circle } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const BodyCard = ({ data, key }) => {
  const navigate = useNavigate()
  const {
    title,
    image,
    IconImage,
    nameTitle,
    subDate,
    subTime,
    _id,
    date,
  } = data
  // console.log('date', date?.split('T'))
  const fullDateStr = date?.split('T')
  console.log('date', fullDateStr && fullDateStr[0])
  const currDateStr = fullDateStr && fullDateStr[0]
  const timeStr = fullDateStr && fullDateStr[1].split('.')
  const currTimeStr = timeStr && timeStr[0]
  console.log('date1', currDateStr, currTimeStr)

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        elevation
        class={styles.bodyCardBg}
        key={_id}
        onClick={() => navigate(`/detail/${_id}`)}
      >
        <Box>
          <Box
            sx={{
              // width: { lg: '260px', md: '260px', sm: '260px', xs: '100%' },
              width: { lg: '260px', md: '260px', sm: '260px', xs: '100%' },
              height: { lg: '210px', md: '210px', sm: '210px', xs: 'auto' },
            }}
          >
            {/* <img src={image} alt="" width="100%" height="auto" /> */}
            {image && (
              <img
                src={
                  image
                  // `http://localhost:7000/${image}` &&
                  // `http://localhost:7000/uploads//${image}`
                }
                // src={`http://localhost:7000/uploads//${image}`}
                // src={`http://localhost:7000/${image}`}
                // src={image}
                alt=""
                width="100%"
                height="auto"
              />
            )}
            <img
              src={
                `http://localhost:7000/${image}`
                // `http://localhost:7000/uploads//${image}`
              }
              // src={`http://localhost:7000/uploads//${image}`}
              // src={`http://localhost:7000/${image}`}
              // src={image}
              alt=""
              width="100%"
              height="auto"
            />

            {`http://localhost:7000/uploads//${image}` && (
              <img
                src={
                  // `http://localhost:7000/${image}`
                  `http://localhost:7000/uploads//${image}`
                }
                // src={`http://localhost:7000/uploads//${image}`}
                // src={`http://localhost:7000/${image}`}
                // src={image}
                alt=""
                width="100%"
                height="auto"
              />
            )}
          </Box>
          <Box>
            <Typography class={styles.bodyTypoh1}>{title}</Typography>
          </Box>
        </Box>

        <Box sx={{ position: 'absolute', bottom: '20px' }}>
          <Box sx={{ display: 'flex' }}>
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
                  <Circle sx={{ width: '6px', height: '6px', mb: '4px' }} />
                </Box>
                <Typography class={styles.bodysubTypo}>{subTime} read</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BodyCard
