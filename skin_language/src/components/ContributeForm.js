import React from 'react'
import {
    Button, Container, TextField, Typography, FormControl, InputLabel,
    MenuItem, Select, Box, RadioGroup, FormLabel, FormHelperText, Radio,
    FormGroup, Grid, Checkbox

} from '@mui/material'

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import MyTheme from './MyTheme';
import { ThemeProvider } from '@emotion/react';

const skin_concern = [
    {
        'type': 'Dry',
        'value': 'dry'
    }, {
        'type': 'Combination',
        'value': 'combination'
    },
    {
        'type': 'Acne',
        'value': 'acne'
    },
    {
        'type': 'Oily',
        'value': 'Oily'
    }, {
        'type': 'Sensitive',
        'value': 'sensitive'
    }
]


export default function ContributeForm(props) {

    const body_tags = [
        {
            'name': 'Face',
            'value': 'face'
        },
        {
            'name': 'Hands',
            'value': 'hands'
        },
        {
            'name': 'Lips',
            'value': 'lips'
        }
    ]



    function renderBodyTags() {
        return body_tags.map(e => {
            return <MenuItem key={e.value}
                color="secondary"
                value={e.value}
                name={e.value}
                label={e.value} > {e.name}
            </MenuItem>
        })
    }

    function renderSkinOption() {
        return skin_concern.map(e => {
            return <React.Fragment key={e.type}>
                <Checkbox
                    name="formSkinOptions"
                    value={e.type}
                    onChange={props.handleCheckbox}
                    checked={props.formSkinOptions.includes(e.type)}
                    size='small'
                // sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                /> {e.type}
            </React.Fragment>
        })
    }

    return (
        <Container>
            <Grid container>
                <ThemeProvider theme={MyTheme}>

                    <Typography
                        sx={{ padding: '1rem' }} variant='h4' component='h1' color='text.primary'>Contribute to our Collection</Typography>
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
                            error={!props.errorForm.title[0]}
                            helperText={props.errorForm.title[1]}

                        />
                        <br />

                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Email'
                            name='form_email'
                            value={props.form_email}
                            onChange={props.updateFormField}
                        />
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Description'
                            name='form_description'
                            value={props.form_description}
                            onChange={props.updateFormField}
                            error={!props.errorForm.description[0]}
                            helperText={props.errorForm.description[1]}
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
                            error={!props.errorForm.image[0]}
                            helperText={props.errorForm.image[1]}
                        />
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Instructions'
                            name='form_instructions'
                            value={props.form_instructions}
                            onChange={props.updateFormField}
                            error={!props.errorForm.instructions[0]}
                            helperText={props.errorForm.instructions[1]}
                        />
                        <br />

                        <FormControl  >

                            <TextField
                                variant='outlined'
                                color='secondary'
                                fullWidth
                                label='Ingredients'
                                name='form_ingredients'
                                value={props.form_ingredients}
                                onChange={props.updateFormField}
                                placeholder='Separate by commas'
                                helperText={props.errorForm.ingredients[1]}
                                error={!props.errorForm.ingredients[0]}

                            />

                        </FormControl>
                        <br />
                        <TextField
                            variant='outlined'
                            color='secondary'
                            fullWidth
                            label='Duration'
                            name='form_duration'
                            autoComplete='off'
                            placeholder='Input duration in minutes: Eg, 30'
                            value={props.form_duration}
                            onChange={props.updateFormField}
                            error={!props.errorForm.duration[0]}
                            helperText={props.errorForm.duration[1]}
                        />
                        <br />
                        <FormControl component="fieldset" variant="standard" error={!props.errorForm.skin_concern[0]} >
                            <Box sx={{ m: 1 }}>
                                <FormGroup
                                    sx={{ display: 'flex', flexDirection: "row" }}
                                >
                                    <FormLabel id="checkbox-group-label" >SkinType: </FormLabel>
                                    <Box>
                                        {renderSkinOption()}
                                    </Box>
                                </FormGroup>
                                <FormHelperText>{props.errorForm.skin_concern[1]}</FormHelperText>
                            </Box>
                        </FormControl>

                        <br />

                        <Box sx={{ paddingTop: '1rem' }}>
                            <FormControl fullWidth
                                error={!props.errorForm.body_tags[0]}
                            >
                                <InputLabel id="simple-select-label">Select Body Tags</InputLabel>
                                <Select
                                    value={props.form_body_tags}
                                    label="Body Tags"
                                    name="form_body_tags"
                                    onChange={props.updateFormField}
                                >
                                    {renderBodyTags()}
                                </Select>
                                <FormHelperText>{props.errorForm.body_tags[1]}</FormHelperText>
                            </FormControl>
                        </Box>

                        <Box sx={{ p: 1 }}>
                            <Button
                                variant="contained"
                                color="secondary"
                                endIcon={<DoubleArrowIcon />}
                                size="small"
                                type="submit"
                                onClick={
                                    props.addContributeForm}
                            > Submit </Button>
                        </Box>
                    </FormControl>

                </ThemeProvider>
            </Grid>
        </Container >

    )
}