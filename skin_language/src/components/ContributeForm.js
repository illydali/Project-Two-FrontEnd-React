import React from 'react'
import {Button, Container, TextField, Typography} from '@mui/material'

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@emotion/react';

export default function ContributeForm() {

    // handleClick() {

    // }
    return (
        <Container>
            <ThemeProvider theme={MyTheme}>
            <Typography 
            sx={{padding: '1rem'}} variant='h2' component='h2' color='text.primary'>Contribute to our Collection</Typography>
            <form noValidate autoComplete='off'>
                <TextField                    
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    required
                    label='Title'
                />
                <br />
                <TextField
                    variant='outlined'
                    color='secondary'
                    fullWidth
                    label='Email'
                />
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<DoubleArrowIcon />}
                    size="small"
                    // type="submit"
                    onClick={() => console.log("you clicked")}
                > Submit </Button>
            </form>

            </ThemeProvider>
        </Container>
    )
}