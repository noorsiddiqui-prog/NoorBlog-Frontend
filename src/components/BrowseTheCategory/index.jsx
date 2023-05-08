import { Box, Typography } from '@mui/material'
import React from 'react'
import Cards from './Cards'
import styles from './browseTheCategory.module.scss'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TwoTitleHeaders from '../TwoTitleHeaders'

const BrowseTheCategory = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#EFF0F3',
        paddingTop: '60px',
        pl: { xl: '200px', lg: '40px', md: '40px', sm: '40px', xs: '10px' },
        pr: { xl: '200px', lg: '40px', md: '40px', sm: '40px', xs: '10px' },
      }}
    >
      <TwoTitleHeaders
        title1={'Browse the category'}
        title2={'see all category'}
      />
      <Box sx={{ mt: '20px', mb: '20px' }}>
        <Cards />
      </Box>
    </Box>
  )
}

export default BrowseTheCategory
