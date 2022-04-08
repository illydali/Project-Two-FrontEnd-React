import React from 'react'
import Collage from './Collage'
import {
    Typography, Box, Container, FormControl, MenuItem, Select, InputLabel, TextField, Button,
    FormLabel, Radio, FormGroup, Card, CardHeader, CardMedia, CardContent,
    Divider, CardActions, Checkbox, Paper, InputBase, IconButton
} from '@mui/material'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ReplayIcon from '@mui/icons-material/Replay';

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

export default function Home(props) {

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
                    name="skinOptions"
                    value={e.type}
                    onChange={props.handleCheckbox}
                    checked={props.skinOptions.includes(e.type)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                /> {e.type}
            </React.Fragment>
        })
    }

    function renderSearchResults() {
        if (props.searchItem) {
            return <>
                <Typography sx={{ p: 1 }} color='text.secondary'>
                    Search Results
                </Typography>
                {props.searchItem.map((each) => {
                    return (
                        <Card key={each._id}>
                            <CardHeader
                                component="h1"
                                title={
                                    each.title}
                                date={each.date} />
                            <CardMedia
                                component='img'
                                height='194'
                                image={each.image}
                                alt={each.image} />
                            <CardContent>
                                <CardActions>
                                    <Button

                                        size="small"
                                        onClick={() => {
                                            props.viewArticle(each._id)
                                            props.viewComments(each._id)
                                        }
                                        }>
                                        Learn More</Button>
                                </CardActions>
                            </CardContent>

                        </Card>
                    )
                })}
            </>
        } else {
            return (
                <Paper> </Paper>
            )
        }
    }

    return (
        <>
            <Container>


                <Box marginTop={3}
                    // hide hero image for now when in xs and sm size
                    sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' }  }}>
                    <img src='https://www.lofficielusa.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F39109%2F1615281388-1615215455766079-shutterstock763875802.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75'
                        alt=''
                        height={450}
                        width={"auto"} />
                    <Collage />

                </Box>
                <Box sx={{ paddingTop: '3rem' }}>
                    <TextField

                        variant='outlined'
                        color='secondary'
                        fullWidth
                        label='Search'
                        name='title'
                        value={props.title}
                        onChange={props.updateFormField}>

                    </TextField>
                </Box>

                <Box sx={{ paddingTop: '1rem' }}>
                    <FormControl sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                        <InputLabel id="imple-select-label">Body</InputLabel>
                        <Select sx={{ minWidth: 450 }}
                       
                            value={props.body_tags}
                            label="Body Tags"
                            name="body_tags"
                            onChange={props.updateFormField}
                        >
                            {renderBodyTags()}
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl component="fieldset" variant="standard" >
                        <Box sx={{ m: 1}}>
                        <FormGroup sx={{display: 'flex', flexDirection: "row"}} >
                            <FormLabel id="checkbox-group-label" sx={{ p: 1 }}>SkinType: </FormLabel>
                            {renderSkinOption()}
                        </FormGroup>
                        </Box>
                    </FormControl>
                </Box>

                <Button
                    variant="contained"
                    color="secondary"

                    size="small"
                    type="submit"
                    onClick={props.getSearch}>
                    <SearchOutlinedIcon />
                </Button>

                <IconButton
                    variant="contained"
                    color="secondary"

                    size="small"
                    type="submit"
                    onClick={props.refreshSearch}>
                    <ReplayIcon />
                </IconButton>

                {renderSearchResults()}

            </Container >
        </>
    )
}