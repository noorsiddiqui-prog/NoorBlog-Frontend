import { Box, Typography, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../AddPostComp/add-post.module.scss'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import style1 from '../CategoryPageComp/FilterBar/filterbar.module.scss'
import { useParams } from 'react-router-dom'

const EditPostComp = () => {
  // const BootstrapInput = styled(InputBase)(({ theme }) => ({
  //   'label + &': {
  //     marginTop: theme.spacing(1),
  //     fontFamily: 'Plus Jakarta Sans',
  //     fontSize: '16px',
  //     fontWeight: '400',
  //     color: '#000',
  //   },
  //   '& .MuiInputBase-input': {
  //     borderRadius: 4,
  //     position: 'relative',
  //     backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
  //     border: '1px solid #ced4da',
  //     fontSize: 18,
  //     width: '100%',
  //     padding: '10px 12px',
  //     transition: theme.transitions.create([
  //       'border-color',
  //       'background-color',
  //       'box-shadow',
  //     ]),
  //     // Use the system font instead of the default Roboto font.
  //     fontFamily: ['Plus Jakarta Sans'].join(','),
  //     '&:focus': {
  //       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  //       borderColor: theme.palette.primary.main,
  //     },
  //   },
  // }))

  const { id } = useParams()
  console.log('id', id)

  const [formData, setFormData] = useState([])

  const [handle, setHandle] = useState()
  const [getData, setGetData] = useState()

  const handler = (e) => {
    setHandle({ ...handle, [e.target.name]: e.target.value })
    console.log('addPost handler', handle)
  }

  const fileHandler = (e) => {
    setHandle({ ...handle, [e.target.name]: e.target.files[0] })
    console.log('addPost fileHandler', handle)
  }

  const showAPI = async (id) => {
    await fetch(`http://localhost:7000/post/show/${id}`)
      .then((res) => res.json())
      .then((user) => {
        setFormData(user)
        setGetData(id)
        console.log(getData)

        // const result = categoryCardData.concat(user)
        // setFormData(result)
        console.log('user', user)
      })
  }

  useEffect(() => {
    showAPI(id)
  }, [])

  //state for fetching  data

  const updateInit = {
    title: formData.title,
    description: formData.description,
    image: formData.image,
  }

  const [updateData, setUpdateData] = useState([])

  const submitForm = async (id) => {
    // e.preventDefault()
    console.log('id update', id)

    const myFormData = new FormData()
    myFormData.append('title', handle.title)
    myFormData.append('description', handle.description)
    myFormData.append('image', handle.image)

    await fetch(`http://localhost:7000/post/update/${id}`, {
      method: 'PUT',
      // headers: {
      //   'content-type': 'multipart/form-data',
      // },
      // body: JSON.stringify(handle),
      // body: handle,
      body: myFormData,
    })
    console.log(myFormData)
  }
  return (
    <div>
      <Box>
        <Box
          sx={{
            paddingTop: '100px',
            paddingBottom: '150px',
            display: 'flex',
            flexDirection: { lg: 'row', md: 'row', sm: 'column', xs: 'column' },

            justifyContent: 'center',
          }}
        >
          <Box class={styles.signupBg}>
            <Typography
              sx={{
                color: 'rgb(109, 109, 159)',
                fontSize: '26px',
                fontWeight: '600',
                fontFamily: 'Plus Jakarta Sans',
              }}
            >
              Edit Post
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: {
                  lg: 'row',
                  md: 'row',
                  sm: 'column',
                  xs: 'column',
                },
              }}
            >
              <Box>
                <Box
                  sx={{
                    mt: '40px',
                    ml: { lg: '0px', md: '0px', sm: '50px', xs: '50px' },
                  }}
                >
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#000',
                    }}
                  >
                    Title
                  </InputLabel>
                  <Input
                    // defaultValue={item.title}
                    onChange={handler}
                    multiline
                    id="bootstrap-input"
                    name="title"
                    sx={{
                      width: {
                        lg: '350px',
                        md: '350px',
                        sm: '100%',
                        xs: '80%',
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    mt: '40px',
                    ml: { lg: '0px', md: '0px', sm: '50px', xs: '50px' },
                  }}
                >
                  <InputLabel
                    shrink
                    htmlFor="bootstrap-input"
                    sx={{
                      fontFamily: 'Plus Jakarta Sans',
                      fontSize: '22px',
                      fontWeight: '600',
                      color: '#000',
                    }}
                  >
                    Description
                  </InputLabel>
                  <Input
                    // defaultValue={item.description}
                    onChange={handler}
                    multiline
                    rows={6}
                    id="bootstrap-input"
                    name="description"
                    sx={{
                      width: {
                        lg: '350px',
                        md: '350px',
                        sm: '100%',
                        xs: '80%',
                      },
                    }}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  mt: '40px',
                  ml: {
                    lg: '180px',
                    md: '180px',
                    sm: '50px',
                    xs: '50px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#000',
                  }}
                >
                  Choose an Image
                </Typography>
                <Box sx={{ width: '200px', height: '200px', mt: '20px' }}>
                  <img
                    // src="./assets/images/Article_Image1.svg"
                    src="./assets/images/Article_Image1.svg"
                    // item.image
                    //   ? item.image
                    //   :

                    alt=""
                    width="100%"
                    height="auto"
                  />
                </Box>
                <Box>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    onChange={fileHandler}
                  />
                </Box>

                <Box sx={{ mt: '40px' }}>
                  <button
                    onClick={() => {
                      submitForm(id)
                    }}
                    class={style1.button2}
                    style={{ backgroundColor: '#a092de' }}
                  >
                    Update Post
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default EditPostComp
