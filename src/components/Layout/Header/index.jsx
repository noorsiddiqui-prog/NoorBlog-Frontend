import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import styles from './header.module.scss'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, Link } from 'react-router-dom'
import Cookie from 'js-cookie'
import { useCookies } from 'react-cookie'

const pages = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Category',
    path: '/category',
  },
  {
    title: 'About Me',
    path: '/aboutme',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Login',
    path: '/login',
  },
  {
    title: 'Signup',
    path: '/signup',
  },
  {
    title: 'Search',
    icon: <SearchIcon />,
  },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {
      const navigate = useNavigate()
    const [cookie, setCookie, removeCookie] = useCookies();
    
    // const logout = () => {
    //     window.open("http://localhost:5000/auth/logout", "_self");
    //     // Cookie.remove('session')
    //     // removeCookie('session');
    //     // navigate("/login")
    //     // removeCookie('session', { path: '/', domain: 'localhost' });


    // }
const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };


  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: '#ff6f00' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: '#ff6f00' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <AppBar position="fixed" class={styles.AppBg}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Box
                class={styles.logoBox}
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  alignItems: 'end',
                }}
              >
                <Typography class={styles.logo} noWrap component="a" href="/">
                  Noor
                </Typography>
                <Typography class={styles.logo2} noWrap component="a" href="/">
                  .Blog
                </Typography>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <Box>
                  <div>
                    {['top'].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={toggleDrawer(anchor, true)}
                          color="inherit"
                        >
                          <MenuIcon />
                        </IconButton>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu()
                    navigate(page.path)
                  }}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: '#2b2c34',
                    display: 'block',
                    fontWeight: '700',
                    fontSize: '18px',
                    textTransform: 'capitalize',
                    fontFamily: 'Plus Jakarta Sans',
                  }}
                >
                  {page.icon && (
                    <>
                      <IconButton>{page.icon}</IconButton>
                    </>
                  )}
                  {page.title}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
