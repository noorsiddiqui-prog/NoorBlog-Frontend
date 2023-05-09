import React, { useState } from 'react'
import styles from './signup.module.scss'
import { Box, Typography } from '@mui/material'
import style1 from '../CategoryPageComp/FilterBar/filterbar.module.scss'

const Signup = () => {
  const empty = {
    name: '',
    email: '',
    username: '',
    password: '',
  }
  // state for handling the signup inputs
  const [handle, setHandle] = useState(empty)

  const handler = (e) => {
    const { name, value } = e.target
    setHandle({ ...handle, [name]: value })
    console.log('signup handle function', handle)
  }

  const submitUser = async (e) => {
    e.preventDefault()
    if (
      handle.name == '' ||
      handle.email == '' ||
      handle.username == '' ||
      handle.password == ''
    ) {
      alert('Please Fill the input field')
    } else {
      let record = await fetch('http://localhost:5000/auth/sigup', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(handle),
      })
      record = await record.json()
      if (record == 'User created successfully') {
        alert('User created Successfully')
      } else {
        alert('User already exists ')
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
            Sign Up
          </Typography>
        </Box>
        <Box>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="name"
              type="text"
              required=""
              onChange={handler}
            />
            <label class={styles.label}>Name</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="email"
              type="email"
              required=""
              onChange={handler}
            />
            <label class={styles.label}>Email</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="username"
              type="text"
              required=""
              onChange={handler}
            />
            <label class={styles.label}>Username</label>
          </div>
        </Box>
        <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="password"
              type="password"
              required=""
              onChange={handler}
            />
            <label class={styles.label}>Password</label>
          </div>
        </Box>
        {/* <Box sx={{ mt: '40px' }}>
          <div class={styles.container}>
            <input
              class={styles.input}
              name="confirm-password"
              type="password"
              required=""
            />
            <label class={styles.label}>Confirm Password</label>
          </div>
        </Box> */}
        <Box sx={{ mt: '20px' }}>
          <Typography component="a" sx={{ cursor: 'pointer' }}>
            Already have an account?
          </Typography>
        </Box>

        <Box sx={{ mt: '20px' }}>
          <button
            // onClick={}
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
