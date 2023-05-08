import React from 'react'
import styles from './signup.module.scss'
import { Box, Typography } from '@mui/material'
import style1 from '../CategoryPageComp/FilterBar/filterbar.module.scss'

const Signup = () => {
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
            Sign Up
          </Typography>
        </Box>
        <Box>
          <div class={styles.container}>
            <input class={styles.input} name="text" type="text" required="" />
            <label class={styles.label}>Name</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input class={styles.input} name="text" type="email" required="" />
            <label class={styles.label}>Email</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input class={styles.input} name="text" type="text" required="" />
            <label class={styles.label}>Username</label>
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
          <div class={styles.container}>
            <input
              class={styles.input}
              name="text"
              type="password"
              required=""
            />
            <label class={styles.label}>Confirm Password</label>
          </div>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Typography component="a" sx={{ cursor: 'pointer' }}>
            Already have an account?
          </Typography>
        </Box>

        <Box sx={{ mt: '20px' }}>
          <button
            style={{ backgroundColor: 'rgba(134, 128, 224, 0.4)' }}
            class={style1.button2}
          >
            Sign Up
          </button>
        </Box>
      </Box>
    </Box>
  )
}

export default Signup