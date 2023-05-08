import { Box, Typography } from '@mui/material'
import React from 'react'
import styles from './two-title-headers.module.scss'
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const TwoTitleHeaders = ({ title1, title2 }) => {
  return (
    <div>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
          }}
        >
          <Typography class={styles.h2}>{title1}</Typography>
          <Box sx={{ ml: { lg: '10px', md: '10px', sm: '0px', xs: '0px' } }}>
            <HorizontalRuleIcon fontSize="large" />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { lg: 'row', md: 'row', sm: 'row', xs: 'column' },
          }}
        >
          <Typography class={styles.h2}>{title2}</Typography>
          <Box sx={{ ml: '10px' }}>
            <ChevronRightIcon fontSize="large" />
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default TwoTitleHeaders
