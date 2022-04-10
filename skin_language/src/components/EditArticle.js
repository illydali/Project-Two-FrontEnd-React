import React from "react";

import {
    Button, Container, TextField, Typography, FormControl, InputLabel,
    MenuItem, Select, Box, RadioGroup, FormLabel, FormControlLabel, Radio,

} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@emotion/react';

export default function EditArticle(props) {
    const handleFocus = (event) => event.target.select();
    return (
        <>
            <Container>

                <ThemeProvider theme={MyTheme}>
                    <Typography
                        sx={{ padding: '1rem' }} variant='h6' component='h2' color='text.primary'>Edit Form</Typography>
                    <FormControl noValidate autoComplete='off' fullWidth>
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            required
                            label='Title'
                            name='form_title'
                            value={props.form_title}
                            onChange={props.updateFormField}
                            onFocus={handleFocus}
                        > {props.form_title}
                        </TextField>
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            multiline
                            label='Description'
                            name='form_description'
                            value={props.form_description}
                            onChange={props.updateFormField}
                        />
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Image URL'
                            name='form_image'
                            value={props.form_image}
                            onChange={props.updateFormField}
                        />
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            multiline
                            label='Instructions'
                            name='form_instructions'
                            value={props.form_instructions}
                            onChange={props.updateFormField}
                        />
                        <br />


                       <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Duration'
                            name='form_duration'
                            value={props.form_duration}
                            onChange={props.updateFormField}
                        /> 
                        
                        <br />

                        <Box>
                            <Button
                                sx={{ mt: 2 }}
                                variant="contained"
                                color="secondary"
                                endIcon={<DoubleArrowIcon />}
                                size="small"
                                type="submit"
                                onClick={
                                    props.updateArticle}
                            > Update </Button>
                            <Button
                                sx={{ mt: 2 }}
                                variant="contained"
                                color="secondary"
                                endIcon={<DoubleArrowIcon />}
                                size="small"
                                type="submit"
                                onClick={
                                    props.cancelEdit}
                            > Cancel </Button>
                        </Box>
                    </FormControl>

                </ThemeProvider>

            </Container >


        </>
    )
}