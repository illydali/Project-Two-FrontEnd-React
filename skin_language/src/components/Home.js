import React from 'react'
import Collage from './Collage'
import { Typography, Box } from '@mui/material'

export default function Home() {
    return (
        <Typography variant='h3' component='h1'>
            Hello
            <Box marginTop={3}
                // hide hero image for now when in xs and sm size
                sx={{ display: 'flex', display: {xs:'none', sm:'none' } }}>
                <img src='https://media.istockphoto.com/photos/smiling-brunette-woman-holding-two-slice-of-lemon-in-front-of-her-picture-id912862714?b=1&k=20&m=912862714&s=170667a&w=0&h=0KmCyEKYqN41soTntdEQeThTcUuh0OaBXxlEVKZHDt0='
                    alt=''
                    height={450} 
                    width={300}/>
                <Collage />
            </Box>

        </Typography>
    )
}