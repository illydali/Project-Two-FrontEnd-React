import { createTheme } from '@mui/material/styles';

const MyTheme = createTheme({
    // breakpoints: {
    //     values: {
    //         mobile: 0,
    //         tablet: 640,
    //         laptop: 1024,
    //         desktop: 1200,
    //     },
    // },
    palette: {
        type: 'light',
        primary: {
            main: '#eaa68f',
            contrastText: '#e8d5d5',
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
            main: '#adc9c5',
        },
        text: {
            primary: '#796c6c',
        },
        background: {
            default: '#f5ebed',
        },
    },
})

export default MyTheme