import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    edward: '#abb7b7',
    edwarddark: '#526060',
    ice: '#c6eae3',
    icedark: '#8fd6c8',
    cleargrey: 'RGBA(69, 86, 102, 0.3)',
    aqua: 'RGBA(131, 206, 191, 0.4)',
    accent: '#A7233A3f',
    canary: 'RGBA(255, 255, 159, 0.35)',
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