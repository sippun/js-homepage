import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    edward: '#abb7b7',
    ice: '#c6eae3',
  },
  fonts: {
    heading: `"SF UI Text", "Helvetica Neue", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif`,
    body: `'Raleway', sans-serif`,
    mono: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`,
    code: `'Source Code Pro', monospace`,  
  },
  components: {
    Heading: {
      variants: {
        'mono': {
          fontFamily: 'mono'
        },
        'code': {
          fontFamily: 'code'
        }
      }
    }
  }
})

export default theme