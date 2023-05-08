import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import styles from './herosection.module.scss'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'

const HeroSection = () => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  })

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
      width: '350px',
      height: '56px',
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
        justifyContent: 'space-between',
        pl: '20px',
        pr: '20px',
        backgroundColor: '#EFF0F3',
        mt: '1px',
        pt: '180px',
        pb: '90px',
        pl: { xl: '500px', lg: '80px', md: '70px', sm: '90px', xs: '10px' },
        pr: { xl: '500px', lg: '80px', md: '70px', sm: '90px', xs: '10px' },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: { lg: '64px', md: '56px', sm: '56px', xs: '34px' },
            lineHeight: { lg: '81px', md: '81px', sm: '81px', xs: '56px' },
            textTransform: 'capitalize',
            color: '#2b2c34',
            maxWidth: '90%',
          }}
        >
          Hi, i’m Noor Ul Ain Full Stack dev
        </Typography>{' '}
        <Box
          sx={{
            display: 'flex',
            mt: '30px',
          }}
        >
          <Box
            sx={{
              borderLeft: '3px solid #2B2C34',
              height: '56px',
              marginRight: '10px',
            }}
          ></Box>
          <Typography
            sx={{
              fontFamily: 'Plus Jakarta Sans',
              fontStyle: 'normal',
              fontWeight: '400',
              fontSize: { lg: '20px', md: '20px', sm: '20px', xs: '16px' },
              lineHeight: { lg: '25px', md: '25px', sm: '25px', xs: '19px' },
              color: '#9A9494',
              maxWidth: '75%',
            }}
          >
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc Make sure you subscribe to get the latest updates
          </Typography>
        </Box>
        <Box sx={{ mt: '30px' }}>
          <BootstrapInput
            defaultValue=""
            id="bootstrap-input"
            placeholder="Enter your email here...."
          />

          <Button
            sx={{
              backgroundColor: '#6246EA',
              borderRadius: '8px',
              color: '#fff',
              width: { lg: '145px', md: '145px', sm: '145px', xs: '100px' },
              height: { lg: '76px', md: '76px', sm: '76px', xs: '56px' },
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

      <Box
        sx={{
          mt: { lg: '0px', md: '0px', sm: '30px', xs: '30px' },
          width: { lg: '470px', md: '470px', sm: '100%', xs: '100%' },
          height: { lg: '387px', md: '377px', sm: 'auto', xs: 'auto' },
        }}
      >
        <img
          src="./assets/images/Group (6).svg"
          alt=""
          width="100%"
          height="auto"
        />
      </Box>
    </Box>
  )
}

export default HeroSection
