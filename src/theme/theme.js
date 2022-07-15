import { extendTheme } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  colors: {
    edward: '#abb7b7',
    edwarddark: '#526060',
    ice: '#c6eae3',
    icedark: '#8fd6c8',
    clearergrey: 'RGBA(176, 191, 206, 0.2)',
    cleargrey: 'RGBA(69, 86, 102, 0.3)',
    cghover: 'RGBA(69, 86, 102, 0.35)',
    aqua: 'RGBA(131, 206, 191, 0.4)',
    particle: '#A7233A3f',
    canary: 'RGBA(255, 255, 159, 0.35)',
    accent: {
      50: '#e6faf6',
      100: '#c7eae4',
      200: '#a6dcd1',
      300: '#83cebf',
      400: '#61c0ad',
      500: '#49a793',
      600: '#388172',
      700: '#275c52',
      800: '#153831',
      900: '#001410',
    }
  },
  fonts: {
    heading: `"SF UI Text", "Helvetica Neue", "Segoe UI", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", sans-serif`,
    body: `'Raleway', sans-serif`,
    mono: `"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace`,
    code: `'Source Code Pro', monospace`,
    kanit: `'Kanit', sans-serif;`,
  },
  components: {
    Button: {
      baseStyle: (props) => ({
        bg: props.colorMode === 'dark' ? 'whiteAlpha.200' : 'clearergrey',
        _hover: {
          bg: props.colorMode === 'dark' ? 'whiteAlpha.300' : 'cghover',
        }
      }),
      defaultProps: {
        variant: 'default',
      }
    },
    Heading: {
      variants: {
        'mono': {
          fontFamily: 'mono'
        },
        'code': {
          fontFamily: 'code'
        },
        'kanit': {
          fontFamily: 'kanit'
        }
      }
    },
    Tabs: {
      baseStyle: {
        tab: {
          fontFamily: 'code'
        }
      }
    },
    Popover: {
      variants: {
        definition: {
          PopoverContent: {
            width: 'fit-content',
            maxWidth: 'fit-content',
          }
        }
      }
    },
  },
  config: {
    initialColorMode: 'dark',
  },
})

export default theme