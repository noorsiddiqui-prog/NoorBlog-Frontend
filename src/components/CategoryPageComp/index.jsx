import { Box } from '@mui/material'
import React from 'react'
import Filterbar from './FilterBar'
import CategoryCards from './CategoryCards'

const CategoryPageComp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },
      }}
    >
      <Box sx={{ width: { lg: '23%', md: '23%', sm: '100%', xs: '100%' } }}>
        <Filterbar />
      </Box>
      <Box width="100%" sx={{ ml: '10px', mt: '100px' }}>
        <CategoryCards />
      </Box>
    </Box>
  )
}

export default CategoryPageComp
