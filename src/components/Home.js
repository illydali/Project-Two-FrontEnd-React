import React from 'react'
import {
    Typography, Box, Container, FormControl, MenuItem, Select, InputLabel, TextField, Button,
    FormLabel, FormGroup, Card, CardHeader, CardMedia, CardContent
    , CardActions, Checkbox, Paper, IconButton
} from '@mui/material'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import Carousel from 'react-bootstrap/Carousel'
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

const duration = [
    {
        'name': '10mins or less',
        'value': '10mins or less'
    },
    {
        'name': '10mins to 20mins',
        'value': '10mins to 20mins'
    },
    {
        'name': '20mins and above',
        'value': '20mins and above'
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
                    size='small'
                // sx={{ '& .MuiSvgIcon-root': { fontSize: 16 } }}
                /> {e.type}
            </React.Fragment>
        })
    }

    function renderDuration() {
        return duration.map(e => {
            return <MenuItem key={e.value}
                color="secondary"
                value={e.value}
                name={e.value}
                label={e.value} > {e.name}
            </MenuItem>
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
                                height='200'
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
                <Paper> No results found </Paper>
            )
        }
    }

    return (
        <>
            <Container >
                <Box marginTop={3}>
                    <Carousel indicators={false} >
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='https://www.lofficielusa.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F39109%2F1615281388-1615215455766079-shutterstock763875802.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75'
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='https://www.foreo.com/mysa/wp-content/uploads/sites/2/2019/10/Exfoliating-sensitive-skin-ingredients-e1570458651320.jpg'
                                alt="Second slide"
                            />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='https://images.pexels.com/photos/4004119/pexels-photo-4004119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                alt="Third slide"
                            />


                        </Carousel.Item>
                    </Carousel>
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

                <Box sx={{ paddingTop: '1rem', display: { xs: 'row', sm: 'flex', md: 'flex', lg: 'flex' } }}>
                    <FormControl fullWidth margin='normal'
                    // sx={{ flexDirection: { xs: "column", sm: "row" } }}
                    >
                        <InputLabel id="simple-select-label">Search via Body Tags</InputLabel>
                        <Select

                            value={props.body_tags}
                            label="Body Tags"
                            name="body_tags"
                            onChange={props.updateFormField}
                        >
                            {renderBodyTags()}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth margin='normal'
                    >

                        <InputLabel id="simple-select-label">Search via Duration</InputLabel>
                        <Select

                            value={props.duration}
                            label="Duration"
                            name="duration"
                            onChange={props.updateFormField}
                        >
                            {renderDuration()}

                        </Select>

                    </FormControl>
                </Box>
                <FormControl component="fieldset" variant="standard" >
                    <Box sx={{ m: 1 }}>
                        <FormGroup sx={{ display: 'flex', flexDirection: "row" }} >
                            <FormLabel id="checkbox-group-label" >SkinType: </FormLabel>
                            <Box>
                                {renderSkinOption()}
                            </Box>
                        </FormGroup>
                    </Box>
                </FormControl>
                <Box>
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
                </Box>

                {renderSearchResults()}

            </Container >
        </>
    )
}