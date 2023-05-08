import React from 'react'
import styles from '../Signup/signup.module.scss'
import { Box, Typography } from '@mui/material'
import style1 from '../CategoryPageComp/FilterBar/filterbar.module.scss'

const Login = () => {
  return (
    <Box
      sx={{
        paddingTop: '100px',
        paddingBottom: '150px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box class={styles.signupBg}>
        <Box sx={{ mt: '20px', mb: '40px' }}>
          <Typography
            sx={{
              color: 'rgb(109, 109, 159)',
              fontSize: '26px',
              fontWeight: '600',
              fontFamily: 'Plus Jakarta Sans',
            }}
          >
            Login
          </Typography>
        </Box>

        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input class={styles.input} name="text" type="email" required="" />
            <label class={styles.label}>Email</label>
          </div>
        </Box>

        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="text"
              type="password"
              required=""
            />
            <label class={styles.label}>Password</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <Typography component="a" sx={{ cursor: 'pointer' }}>
            Do you want to Register?
          </Typography>
        </Box>

        <Box sx={{ mt: '30px' }}>
          <button
            style={{ backgroundColor: 'rgba(134, 128, 224, 0.4)' }}
            class={style1.button2}
          >
            Login
          </button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login
