import { createTheme } from '@mui/material/styles';

const MyTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#eaa68f',
            contrastText: '#eaa68f',
        },
        secondary: {
            main: '#ecb581',
            contrastText: 'rgba(251,246,246,0.87)',
        },
        divider: '#eccad6',
        success: {
            main: '#eadaec',
        },
        info: {
            main: '#fff5ea',
        },
        text: {
            primary: '#796c6c',
        },
        background: {
            default: '#f5ebed',
        },
    },
    typography: {

        h3: {
            fontSize: '2.5rem',
            fontFamily:'Roboto',
            '@media (max-width:600px)': {
                fontSize: '2rem',
            }
        },
        h2 : {
            fontSize: '4rem',
            '@media (max-width:600px)': {
                fontSize: '3rem',
            }
        }
    }
})

export default MyTheme