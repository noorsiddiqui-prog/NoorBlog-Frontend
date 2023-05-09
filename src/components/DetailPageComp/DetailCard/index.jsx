import { Circle } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from './detailcard.module.scss'
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete'

const DetailCard = ({ data }) => {
  const {
    title,
    image,
    IconImage,
    nameTitle,
    subDate,
    subTime,
    _id,
    desc,
  } = data

  const navigate = useNavigate()
  const { id } = useParams()

  const [handle, setHandle] = useState([])
  const [getData, setGetData] = useState()
  console.log('id', id)

  async function delApi(id) {
    var res = await fetch(`http://localhost:7000/post/delete/${id}`, {
      method: 'DELETE',
    })
    await res.json()
    console.log(data)
  }

  const showAPI = async (id) => {
    await fetch(`http://localhost:7000/post/show/${id}`)
      .then((res) => res.json())
      .then((user) => {
        setHandle(user)
        setGetData(id)
        console.log(getData, handle)

        // const result = categoryCardData.concat(user)
        // setFormData(result)
        console.log('user', user)
      })
  }

  useEffect(() => {
    showAPI()
  }, [])
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        // key={id}
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          width: '80%',
          padding: '20px 16px',
          boxShadow: '32px 32px 48px #d4d4d4,-32px -32px 48px #ffffff',
          minHeight: '1200px',
          background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        }}
      >
        <Box
          sx={{
            width: '80%',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            ml: '10%',
          }}
        >
          <Box>
            <img
              // src="./assets/images/Article_Image1.svg"
              src={image}
              alt=""
              width="100%"
              height="auto"
            />
          </Box>
        </Box>

        <Box sx={{ mt: '530px', ml: '10%' }}>
          <Typography
            sx={{
              fontSize: '36px',
              fontWeight: '600',
              fontFamily: 'Plus Jakarta Sans',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', mt: '20px' }}>
              <Box
                sx={{
                  width: '47px',
                  height: '57px',
                  borderRadius: '50%',
                }}
              >
                <img src={IconImage} alt="" width="100%" height="auto" />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  ml: '10px',
                }}
              >
                <Typography class={styles.bodyTypo2}>{nameTitle}</Typography>
                <Box sx={{ display: 'flex', textAlign: 'center' }}>
                  <Typography class={styles.bodysubTypo}>{subDate} </Typography>
                  <Box
                    sx={{
                      ml: '10px',
                      mr: '10px',
                      alignItems: 'center',
                    }}
                  >
                    <Circle
                      sx={{
                        width: '6px',
                        height: '6px',
                        mb: '4px',
                        color: '#9d9ea2',
                      }}
                    />
                  </Box>
                  <Typography class={styles.bodysubTypo}>{subTime}</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ mr: '10%' }}>
              <IconButton
                onClick={() => navigate(`/edit-post/${id}`)}
                sx={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#e1e0e0',
                  borderRadius: '50%',
                }}
              >
                <EditIcon sx={{ fontSize: '24px', color: 'green' }} />
              </IconButton>
              <IconButton
                onClick={() => delApi(id)}
                sx={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#e1e0e0',
                  borderRadius: '50%',
                  ml: '20px',
                }}
              >
                <DeleteIcon sx={{ fontSize: '24px', color: 'red' }} />
              </IconButton>
            </Box>
          </Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              fontFamily: 'Plus Jakarta Sans',
              mt: '20px',
              mr: '10%',
              color: '#68696c',
            }}
          >
            {desc}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default DetailCard
