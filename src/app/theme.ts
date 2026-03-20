import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    background: {
      default: '#f5e5ff',
      paper: '#e5fbff',
    },
    text: {
      primary: '#2c1560',
    },
    primary: {
      main: '#6f1fcb',
    },
    secondary: {
      main: '#ff2fd1',
    },
    success: {
      main: '#39ff14',
    },
    warning: {
      main: '#ffbf33',
    },
  },
  typography: {
    fontFamily: 'Rajdhani, Segoe UI, sans-serif',
    h1: { fontFamily: 'Press Start 2P, monospace' },
    h2: { fontFamily: 'Press Start 2P, monospace' },
    h3: { fontFamily: 'Press Start 2P, monospace' },
    h4: { fontFamily: 'Press Start 2P, monospace' },
    h5: { fontFamily: 'Press Start 2P, monospace' },
    h6: { fontFamily: 'Press Start 2P, monospace' },
    button: {
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
})
