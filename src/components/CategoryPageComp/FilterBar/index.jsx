import { Box, Button } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import styles from './filterbar.module.scss'
import { useNavigate } from 'react-router-dom'

const Filterbar = ({ sessionData }) => {
  const navigate = useNavigate()
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: '#6246EA',
          pt: '30px',
          pb: '30px',
          pl: '26px',
          pb: '16px',
          height: 'auto',
          mt: '120px',
          mb: '20px',
          ml: '20px',
          borderRadius: '10px',
          boxShadow: '20px 20px 35px #b7b6b6,-20px -20px 35px #ffffff',
        }}
      >
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              color: '#fff',
              fontWeight: '600',
              fontSize: '20px',
              mb: '20px',
            }}
          >
            Filter here
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="javascript"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="javascript"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="JavaScript"
              sx={{ color: '#fff' }}
            />
            <FormControlLabel
              value="python"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="Python"
              sx={{ color: '#fff' }}
            />
            <FormControlLabel
              value="reactjs"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="React JS"
              sx={{ color: '#fff' }}
            />
            <FormControlLabel
              value="CSS"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="CSS"
              sx={{ color: '#fff' }}
            />
            <FormControlLabel
              value="HTML"
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#fff',
                    },
                  }}
                />
              }
              label="HTML"
              sx={{ color: '#fff' }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {!sessionData == null ? (
        navigate('/login')
      ) : (
        <>
          <Box sx={{ ml: '20px', mt: '40px' }}>
            <button
              onClick={() => navigate('/add-post')}
              class={styles.button2}
            >
              Add Post
            </button>
          </Box>
        </>
      )}
    </Box>
  )
}

export default Filterbar
