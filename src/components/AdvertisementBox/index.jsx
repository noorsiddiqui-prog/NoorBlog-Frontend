import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from './advertisement.module.scss'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

const AdvertisementBox = () => {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#FFFFFE' : '#2b2b2b',
      border: '1px solid #FFFFFE',
      fontSize: 16,
      height: '46px',
      padding: '10px 30px',

      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: ['Plus Jakarta Sans'].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))
  return (
    <div>
      <Box
        sx={{
          backgroundColor: '#EFF0F3',
          width: '100%',
          height: '453px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: { xs: '40px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '130px',
            height: '130px',
          }}
        >
          <Box sx={{ width: '74px', height: '100px' }}>
            <img
              src="./assets/images/mailBox.svg"
              alt=""
              width="100%"
              height="auto"
            />
          </Box>
        </Box>

        <Typography class={styles.h1}>
          Subscribe For the lastest updates
        </Typography>
        <Typography class={styles.h2}>
          Subscribe to newsletter and never miss the new post every week.
        </Typography>

        <Box
          sx={{
            mt: '30px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
          }}
          class={styles.searchbox}
        >
          <BootstrapInput
            defaultValue=""
            id="bootstrap-input"
            placeholder="Enter your email here...."
            sx={{
              width: { lg: '350px', md: '350px', sm: '350px', xs: '300px' },
            }}
          />

          <Box class={styles.subscribeBtn}>
            <Button
              sx={{
                backgroundColor: '#6246EA',
                borderRadius: '8px',
                color: '#fff',
                width: { lg: '145px', md: '145px', sm: '145px', xs: '100px' },
                height: { lg: '56px', md: '56px', sm: '56px', xs: '56px' },
                marginLeft: { lg: '20px', md: '20px', sm: '20px', xs: '0px' },
                marginTop: { lg: '0px', md: '0px', sm: '20px', xs: '10px' },
                fontFamily: 'Plus Jakarta Sans',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: { lg: '20px', md: '20px', sm: '20px', xs: '14px' },
                lineHeight: '25px',
                textTransform: 'capitalize',
                ':hover': {
                  backgroundColor: '#6246EA',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default AdvertisementBox
