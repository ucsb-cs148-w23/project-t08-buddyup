// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
    config,
    styles: {
      global: (props) => ({
        body: {
          bg: "white",
        }
      })
    },
    fonts: {
        heading: `'Cormorant Unicase', serif`,
        body: `'Raleway', sans-serif`,
    },
  })

export default theme
