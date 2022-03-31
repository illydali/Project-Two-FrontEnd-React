import React from 'react'
import {
    Button, Container, TextField, Typography, FormControl, InputLabel,
    MenuItem, Select, Box, RadioGroup, FormLabel, FormControlLabel, Radio,
    Divider
} from '@mui/material'

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@emotion/react';

export default function ContributeForm(props) {

    // handleClick() {

    // }
    return (
        <Container>

            <ThemeProvider theme={MyTheme}>
                <Typography
                    sx={{ padding: '1rem' }} variant='h2' component='h2' color='text.primary'>Contribute to our Collection</Typography>
                <FormControl noValidate autoComplete='off'>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        required
                        label='Title'
                        name='title'
                        value={props.title}
                        onChange={props.updateFormField}
                    />
                    <br />
                    <TextField
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        label='Email'
                        name='email'
                        value={props.email}
                        onChange={props.updateFormField}
                    />
                    <br/>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        label='Description'
                        name='description'
                        value={props.description}
                        onChange={props.updateFormField}
                    />
                    <br/>
                    <TextField
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        label='Image URL'
                        name='image'
                        value={props.image}
                        onChange={props.updateFormField}
                    />
                    <br />
                    <TextField
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        label='Image URL'
                        name='instuctions'
                        value={props.instructions}
                        onChange={props.updateFormField}
                    />
                    <br />
                    <FormControl>
                        <InputLabel id="select-label">Ingredients</InputLabel>
                        <Select
                            labelId="select-label"
                            id="simple-select"
                            fullWidth
                            value={props.ingredients_tag}
                            name='ingredients_tag'
                            label="Ingredients"
                            onChange={props.updateFormField}
                        >
                            {props.ingredients.map((e) => (
                                <MenuItem key={e._id} value={e.name}>{e.name}</MenuItem>

                            ))}

                        </Select>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <FormLabel id="skin_concern">Skin Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="skin_concern"
                            onChange={props.updateFormField}
                            // defaultValue="sensitive"
                            name="skin_concern"
                            value={props.skin_concern}
                            
                        >
                            <FormControlLabel color="secondary" value="dry" control={<Radio />} label="Dry" />
                            <FormControlLabel color="secondary" value="oily" control={<Radio />} label="Oily" />
                            <FormControlLabel color="secondary" value="sensitive" control={<Radio />} label="Sensitive" />
                            <FormControlLabel color="secondary" value="acne" control={<Radio />} label="Acne" />
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <Box>
                        <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<DoubleArrowIcon />}
                            size="small"
                            // type="submit"
                            onClick={() => console.log("you clicked")}
                        > Submit </Button>
                    </Box>
                </FormControl>

            </ThemeProvider>

        </Container>

    )
}