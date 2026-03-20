import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const { t, i18n } = useTranslation()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const activeLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'fi'
  const isLanguageMenuOpen = Boolean(languageMenuAnchor)

  const openLanguageMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setLanguageMenuAnchor(event.currentTarget)
  }

  const closeLanguageMenu = () => {
    setLanguageMenuAnchor(null)
  }

  const changeLanguage = (language: 'fi' | 'en') => {
    void i18n.changeLanguage(language)
    closeLanguageMenu()
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const navItems = [
    { label: t('nav.proposals'), to: '/' },
    { label: t('nav.calendar'), to: '/calendar' },
  ]

  return (
    <Box className="min-h-screen bg-slate-50">
      <AppBar position="static">
        <Toolbar className="gap-3">
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label={t('nav.openMenu')}
              edge="start"
              onClick={toggleMobileMenu}
              className="min-w-[44px] min-h-[44px]"
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" className="mr-auto">
            {t('app.title')}
          </Typography>
          {!isMobile && (
            <>
              {navItems.map((item) => (
                <Button key={item.to} color="inherit" component={NavLink} to={item.to}>
                  {item.label}
                </Button>
              ))}
              <Button
                color="inherit"
                aria-controls={isLanguageMenuOpen ? 'language-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isLanguageMenuOpen ? 'true' : undefined}
                onClick={openLanguageMenu}
              >
                {t('nav.language')}: {t(`language.${activeLanguage}`)}
              </Button>
            </>
          )}
          <Menu
            id="language-menu"
            anchorEl={languageMenuAnchor}
            open={isLanguageMenuOpen}
            onClose={closeLanguageMenu}
          >
            <MenuItem selected={activeLanguage === 'fi'} onClick={() => changeLanguage('fi')}>
              {t('language.fi')}
            </MenuItem>
            <MenuItem selected={activeLanguage === 'en'} onClick={() => changeLanguage('en')}>
              {t('language.en')}
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={closeMobileMenu}
        ModalProps={{ keepMounted: true }}
      >
        <Box className="w-64" role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className="min-h-[48px]"
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  changeLanguage(activeLanguage === 'fi' ? 'en' : 'fi')
                  closeMobileMenu()
                }}
                className="min-h-[48px]"
              >
                <ListItemText
                  primary={`${t('nav.language')}: ${t(`language.${activeLanguage}`)}`}
                  secondary={t('nav.changeLanguage')}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Outlet />
    </Box>
  )
}
