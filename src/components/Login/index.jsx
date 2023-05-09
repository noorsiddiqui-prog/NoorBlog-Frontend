import React, { useState } from 'react'
import styles from '../Signup/signup.module.scss'
import { Box, Typography } from '@mui/material'
import style1 from '../CategoryPageComp/FilterBar/filterbar.module.scss'

const Login = () => {
  //state for handling login
  const empty = {
    email: '',
    password: '',
  }
  const [handle, setHandle] = useState(empty)

  const handleLogin = (e) => {
    const { name, value } = e.target
    setHandle({ ...handle, [name]: value })
    console.log('handle login', handle)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (handle.email == '' || handle.password == '') {
      alert('Fill input first')
    } else {
      let record = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(handle),
      })
      record = await record.json()
      if (record.message == 'Login Successfully') {
        sessionStorage.setItem('userID', record.userDetails._id)
        sessionStorage.setItem('userEmail', record.userDetails.email)

        alert('Login Successfully')
      } else {
        alert('Failed to login ')
      }
    }
  }

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
            <input
              class={styles.input}
              name="email"
              type="email"
              required=""
              onChange={handleLogin}
            />
            <label class={styles.label}>Email</label>
          </div>
        </Box>

        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="password"
              type="password"
              required=""
              onChange={handleLogin}
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
            onClick={handleSubmit}
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
