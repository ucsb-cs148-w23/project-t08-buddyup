// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import "@fontsource/alata"

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
          // bg: "white",
          bg: "#FCE8E1",
        }
      })
    },
    fonts: {
        heading: `'Alata',  sans-serif`,
        // body: `'Raleway', sans-serif`,
        body: `'Alata', sans-serif`,
    },
  })

export default theme
