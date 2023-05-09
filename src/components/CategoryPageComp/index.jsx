import { Box } from '@mui/material'
import React, { useState } from 'react'
import Filterbar from './FilterBar'
import CategoryCards from './CategoryCards'
import { useNavigate } from 'react-router-dom'

const CategoryPageComp = () => {
  const navigate = useNavigate()
  const [sessionData, setSessionData] = useState(null)
  const getSessionData = () => {
    setSessionData(sessionStorage.getItem('userID'))
  }
  return (
    <>
      {/* {sessionData == null ? navigate('/login') : <></>} */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
        }}
      >
        <Box sx={{ width: { lg: '23%', md: '23%', sm: '100%', xs: '100%' } }}>
          <Filterbar sessionData={sessionData} />
        </Box>
        <Box width="100%" sx={{ ml: '10px', mt: '100px' }}>
          <CategoryCards />
        </Box>
      </Box>
    </>
  )
}

export default CategoryPageComp
