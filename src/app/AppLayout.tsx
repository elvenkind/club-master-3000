import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import type { MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router-dom'

export const AppLayout = () => {
  const { t, i18n } = useTranslation()
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState<null | HTMLElement>(null)

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

  return (
    <Box className="min-h-screen bg-slate-50">
      <AppBar position="static">
        <Toolbar className="gap-3">
          <Typography variant="h6" className="mr-auto">
            {t('app.title')}
          </Typography>
          <Button color="inherit" component={NavLink} to="/">
            {t('nav.proposals')}
          </Button>
          <Button color="inherit" component={NavLink} to="/calendar">
            {t('nav.calendar')}
          </Button>
          <Button
            color="inherit"
            aria-controls={isLanguageMenuOpen ? 'language-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isLanguageMenuOpen ? 'true' : undefined}
            onClick={openLanguageMenu}
          >
            {t('nav.language')}: {t(`language.${activeLanguage}`)}
          </Button>
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
      <Outlet />
    </Box>
  )
}
