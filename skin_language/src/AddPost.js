import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import TextField from '@mui/material/TextField'
// import { makeStyles } from '@mui/material';


// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom: 20,
//         display: 'block'
//     }
// })
export default function AddPost(props) {


    return (
        <Container>

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