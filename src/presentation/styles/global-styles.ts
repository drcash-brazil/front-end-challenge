import { extendTheme } from '@chakra-ui/react'

export const globalStyles = {
  '*, *::after, *::before': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  html: {
    fontSize: '62.5%',
    '@media screen and (max-width: 75.5em)': {
      fontSize: '56.25%'
    },
    '@media screen and (max-width: 56.25em)': {
      fontSize: '50%'
    }
  },
  'body, button, input': {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif'
  }
}

export const theme = extendTheme({
  styles: {
    global: globalStyles
  }
})
