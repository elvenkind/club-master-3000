import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#360185', // Tumma violetti
    },
    secondary: {
      main: '#8F0177', // Magenta
    },
    error: {
      main: '#DE1A58', // Pinkki/punainen (accent)
    },
    warning: {
      main: '#F4B342', // Keltainen/oranssi (highlight)
    },
  },
})
