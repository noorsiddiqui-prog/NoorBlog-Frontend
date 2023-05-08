import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { Button, Divider, IconButton, Link, Typography } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import styles from './footer.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import { useNavigate } from 'react-router-dom'

export const menuItems1 = [
  {
    text: 'CSS',
    route: '/allmenu',
  },
  {
    text: 'Javascript',
    route: '/',
  },
  {
    text: 'Tailwind',
    route: '/Become_Cateter',
  },
  {
    text: 'React Js',
    route: '/Become_Driver',
  },
  {
    text: 'More Category',
    route: '/',
  },
]

export const menuItems2 = [
  {
    text: 'About Me',
    route: '/about',
  },
  {
    text: 'Projects',
    route: '/',
  },
  {
    text: 'Acheivement',
    route: '/',
  },
]

export const menuItems3 = [
  {
    text: '+92-3XXX-XXX-XX',
    route: '/',
  },
  {
    text: 'noor2rulain@gmail.com',
    route: '/Blog',
  },
]
export const menuItems4 = [
  {
    text: '+Medium',
    route: '/',
  },
  {
    text: 'Instagram',
    route: '/',
  },
  {
    text: 'Twitter',
    route: '/',
  },
  {
    text: 'Facebook',
    route: '/',
  },
]

const Footer = () => {
  // let navigate = useNavigate()
  return (
    <>
      <Box sx={{ backgroundColor: '#E4E5E9' }} class={styles.footerbg}>
        <Box
          sx={{
            margin: {
              xl: '70px',
              lg: '60px',
              md: '10px',
              sm: '10px',
              xs: '5px',
            },
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: {
                lg: 'row',
                md: 'row',
                sm: 'column',
                xs: 'column',
              },
              justifyContent: 'space-between',
            }}
          >
            <Box
              display="flex"
              flexDirection={'column'}
              // justifyContent="center"
              // alignItems="center"
              textAlign={{ lg: 'left', md: 'left', xs: 'center', sm: 'center' }}

              //   minHeight="100vh"
            >
              <Box>
                <Box>
                  <Box
                    class={styles.logoBox}
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'flex' },
                      alignItems: 'end',
                    }}
                  >
                    <Typography
                      class={styles.logo}
                      noWrap
                      component="a"
                      href="/"
                    >
                      Noor
                    </Typography>
                    <Typography
                      class={styles.logo2}
                      noWrap
                      component="a"
                      href="/"
                    >
                      .Blog
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      marginTop: '16px',
                      fontSize: {
                        lg: '18px',
                        md: '18px',
                        sm: '16px',
                        xs: '16px',
                      },
                      letterSpacing: '0.01em',
                      width: {
                        lg: '352px',
                        md: '352px',
                        sm: '100%',
                        xs: '100%',
                      },
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
                <Box marginTop={'20.48px'}>
                  <Link component="button">
                    <IconButton width={'23.04px'} height={'23.04px'}>
                      <InstagramIcon color="#2B2C34" />
                    </IconButton>
                  </Link>
                  <Link component="button" sx={{ marginLeft: '12.96px' }}>
                    <IconButton width={'23.04px'} height={'23.04px'}>
                      <FacebookIcon color="#2B2C34" />
                    </IconButton>
                  </Link>
                  <Link component="button" sx={{ marginLeft: '12.96px' }}>
                    <IconButton width={'23.04px'} height={'23.04px'}>
                      <LinkedInIcon color="#2B2C34" />
                    </IconButton>
                  </Link>
                </Box>

                <Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: '600',
                        fontSize: '20px',
                        //   letterSpacing: "0.015em",
                        color: '#1A1824',
                        marginTop: '48.48px',
                      }}
                    >
                      Our Offices
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    flexDirection={'row'}
                    fontWeight={'400'}
                    fontSize={'18px'}
                    marginTop={'8px'}
                    textAlign={{
                      lg: 'left',
                      md: 'left',
                      xs: 'center',
                      sm: 'center',
                    }}
                    sx={{
                      justifyContent: {
                        lg: 'left',
                        md: 'left',
                        sm: 'center',
                        xs: 'center',
                      },
                    }}

                    // justifyContent="center"
                    // alignItems="center"
                  >
                    <Box>
                      <Typography sx={{ letterSpacing: '0.015em' }}>
                        Greater Vercouver
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{ marginLeft: '19px', marginRight: '19px' }}
                      >
                        |
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>Victoria</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: { lg: '0px', md: '0px', sm: '70px', xs: '70px' },
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '20px',

                    //   letterSpacing: "0.015em",
                    color: '#1A1824',
                    // marginTop: "48.48px",
                    textAlign: {
                      sm: 'center',
                      xs: 'center',
                      md: 'left',
                      lg: 'left',
                    },
                  }}
                >
                  Category
                </Typography>
                <Box
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    color: '#9EA3AE',
                    marginTop: '32px',
                    // justifyContent:{sm: "center", xs: "center", md: "center"}
                  }}
                >
                  <List>
                    {menuItems1.map((item) => (
                      <ListItem
                        // onClick={() => navigate(`${item.route}`)}
                        button
                        key={item.text}
                        sx={{
                          textAlign: {
                            lg: 'left',
                            md: 'left',
                            sm: 'center',
                            xs: 'center',
                            justifyContent: 'center',
                            paddingLeft: '0%',
                            paddingRight: '0%',
                          },
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                    //   letterSpacing: "0.015em",
                    color: '#1A1824',
                    //   marginTop: "48.48px",
                    textAlign: {
                      sm: 'center',
                      xs: 'center',
                      md: 'left',
                      lg: 'left',
                    },
                  }}
                >
                  About Me
                </Typography>
                <Box
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    color: '#9EA3AE',
                    marginTop: '32px',
                  }}
                >
                  <List>
                    {menuItems3.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        // onClick={() => navigate(`${item.route}`)}
                        sx={{
                          textAlign: {
                            sm: 'center',
                            xs: 'center',
                            md: 'left',
                            lg: 'left',
                          },
                          justifyContent: 'center',
                          paddingLeft: '0%',
                          paddingRight: '0%',
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                    //   letterSpacing: "0.015em",
                    color: '#1A1824',
                    //   marginTop: "48.48px",
                    textAlign: {
                      sm: 'center',
                      xs: 'center',
                      md: 'left',
                      lg: 'left',
                    },
                  }}
                >
                  Get In Touch
                </Typography>
                <Box
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    color: '#9EA3AE',
                    marginTop: '32px',
                  }}
                >
                  <List>
                    {menuItems3.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        // onClick={() => navigate(`${item.route}`)}
                        sx={{
                          textAlign: {
                            sm: 'center',
                            xs: 'center',
                            md: 'left',
                            lg: 'left',
                          },
                          justifyContent: 'center',
                          paddingLeft: '0%',
                          paddingRight: '0%',
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <Typography
                  sx={{
                    fontWeight: '600',
                    fontSize: '20px',
                    //   letterSpacing: "0.015em",
                    color: '#1A1824',
                    //   marginTop: "48.48px",
                    textAlign: {
                      sm: 'center',
                      xs: 'center',
                      md: 'left',
                      lg: 'left',
                    },
                  }}
                >
                  Follow Us
                </Typography>
                <Box
                  sx={{
                    fontWeight: '400',
                    fontSize: '18px',
                    color: '#9EA3AE',
                    marginTop: '32px',
                  }}
                >
                  <List>
                    {menuItems4.map((item) => (
                      <ListItem
                        button
                        key={item.text}
                        // onClick={() => navigate(`${item.route}`)}
                        sx={{
                          textAlign: {
                            sm: 'center',
                            xs: 'center',
                            md: 'left',
                            lg: 'left',
                          },
                          justifyContent: 'center',
                          paddingLeft: '0%',
                          paddingRight: '0%',
                        }}
                      >
                        <ListItemText primary={item.text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>
          </Box>
          <Divider variant="middle" />

          <Box justifyContent="space-between">
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  lg: 'row',
                  md: 'row',
                  sm: 'column',
                  xs: 'column',
                },
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: '400',
                    fontSize: '12px',
                    color: '#9EA3AE',
                  }}
                >
                  @ 2023 Noor-Blog. All Rights Reserved.
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Box>
                  <Button
                    sx={{
                      color: '#9EA3AE',
                      textTransform: 'capitalize',
                      fontSize: '12px',
                      fontWeight: '400',
                      marginRight: '50px',
                    }}
                    // onClick={() => navigate('/Terms&Conditions')}
                  >
                    Terms of Service
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      color: '#9EA3AE',
                      textTransform: 'capitalize',
                      fontSize: '12px',
                      fontWeight: '400',
                      marginRight: '50px',
                    }}
                  >
                    Privacy Policy
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
