import React from "react";

import {
    Button, Container, TextField, Typography, FormControl, InputLabel,
    MenuItem, Select, Box, RadioGroup, FormLabel, FormControlLabel, Radio,

} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@emotion/react';

export default function EditArticle(props) {

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
                        > {props.form_title}
                            </TextField>
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
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
                            label='Instructions'
                            name='form_instuctions'
                            value={props.form_instructions}
                            onChange={props.updateFormField}
                        />
                        <br />

                        <FormControl  >
                            {/* <InputLabel id="select-label" select>Ingredients</InputLabel>
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

                        </Select> */}
                            {/* <TextField
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                label='Ingredients'
                                name='form_ingredients'
                                value={props.form_ingredients}
                                onChange={props.updateFormField}
                            />
                            <TextField
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                label='Quantity'
                                name='form_quantity'
                                value={props.form_quantity}
                                onChange={props.updateFormField}
                            /> */}
                        </FormControl>

                        <br />

                        <FormLabel id="skin_concern">Skin Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="skin_concern"
                            onChange={props.updateFormField}
                            // defaultValue="sensitive"
                            name="form_skin_concern"
                            value={props.form_skin_concern}

                        >
                            <FormControlLabel color="secondary" value="dry" control={<Radio />} label="Dry" />
                            <FormControlLabel color="secondary" value="oily" control={<Radio />} label="Oily" />
                            <FormControlLabel color="secondary" value="sensitive" control={<Radio />} label="Sensitive" />
                            <FormControlLabel color="secondary" value="acne" control={<Radio />} label="Acne" />
                        </RadioGroup>


                        <br />
                        <FormLabel id="Duration" htmlFor='Duration'>How long? </FormLabel>
                        <Select
                            aria-labelledby="Duration"
                            onChange={props.updateFormField}
                            // defaultValue="sensitive"
                            name="form_duration"
                            value={props.form_duration ? props.form_duration : ""}

                        >
                            <MenuItem color="secondary" value="10mins or less" label="10mins or less" > 10 Mins or Less </MenuItem>
                            <MenuItem color="secondary" value="10mins to 20mins" label="10mins to 20mins" > Between 10 to 20 Mins </MenuItem>
                            <MenuItem color="secondary" value="20mins and above" label="20mins and above" > 20 Mins and Above </MenuItem>

                        </Select>
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='body_tags'
                            name='form_body_tags'
                            value={props.body_tags}
                            onChange={props.updateFormField}
                        />
                        <Box>
                            <Button
                                sx={{ mt:2 }}
                                variant="contained"
                                color="secondary"
                                endIcon={<DoubleArrowIcon />}
                                size="small"
                                type="submit"
                                onClick={
                                    props.updateArticle}
                            > Update </Button>
                            <Button
                                sx={{ mt:2 }}
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