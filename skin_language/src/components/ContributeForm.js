import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TextField from '@mui/material/TextField'

export default function ContributeForm() {

    // handleClick() {

    // }
    return (
        <Container maxWidth='sm'>

            <h1>Add new post</h1>
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
                    type="submit"
                    onClick={() => console.log("you clicked")}
                > Submit </Button>
            </form>


        </Container>
    )
}