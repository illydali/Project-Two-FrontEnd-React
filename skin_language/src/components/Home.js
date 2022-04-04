import { React } from 'react'
import Collage from './Collage'
import {
    Typography, Box, Container, FormControl, MenuItem, Select, InputLabel, TextField, Button,
    FormLabel, Radio, RadioGroup, FormControlLabel
} from '@mui/material'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function Home(props) {

    function renderSearchResults() {
        if (props.searchItem) {
            return <div>
                {props.searchItem.map((e) => {
                                return (
                                    <h1>{e.title}</h1>
                                )
                            })}
            </div>
        } else {
            return (
                <div> ... </div>
            )
        }
    }

    return (
        <>
            <Container>
                <Typography variant='h3' component='h1'>

                    <Box marginTop={3}
                        // hide hero image for now when in xs and sm size
                        sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}>
                        <img src='https://media.istockphoto.com/photos/smiling-brunette-woman-holding-two-slice-of-lemon-in-front-of-her-picture-id912862714?b=1&k=20&m=912862714&s=170667a&w=0&h=0KmCyEKYqN41soTntdEQeThTcUuh0OaBXxlEVKZHDt0='
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
                            label='Type something here'
                            name='title'
                            value={props.title}
                            onChange={props.updateFormField}>

                        </TextField>

                    </Box>

                    <Box sx={{ paddingTop: '1rem' }}>
                        <FormControl sx={{ width: "30rem" }}>
                            <InputLabel id="select-filter"
                            >Select One</InputLabel>
                            <Select
                                labelId="select-filter"
                                id="filterSelect"
                                value={props.body_tags}

                                name='body_tags'
                                label="SearchTags"
                                // onChange={(e) => {
                                //     setSearchTerm(e.target.value)}}
                                onChange={props.updateFormField}
                            // onChange={props.getSearch}
                            >
                                {props.data.map(each =>
                                    each.body_tags.map((b, ind) => {
                                        return (
                                            <MenuItem key={ind} value={b}>{b}</MenuItem>
                                        )
                                    }
                                    )
                                )}
                            </Select>
                        </FormControl>
                        <FormLabel id="skin_concern">Skin Type</FormLabel>
                        <RadioGroup
                            aria-labelledby="select-duration"
                            onChange={props.updateFormField}
                            // defaultValue="sensitive"
                            name="duration"
                            value={props.duration}

                        >
                            <FormControlLabel color="secondary" value="10mins or less" control={<Radio />} label="10 Mins or Less" />
                            <FormControlLabel color="secondary" value="10mins to 20mins" control={<Radio />} label="Up to 20 Mins" />
                            <FormControlLabel color="secondary" value="20mins and above" control={<Radio />} label="Above 20 Mins" />
                        </RadioGroup>
                    </Box>
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<SearchOutlinedIcon />}
                    size="small"
                    type="submit"
                    onClick={props.getSearch}>
                    Search
                </Button>
                <Typography>
                    Search Results
                </Typography>
                                    
                    
                    {/* {props.displaySearch ?

                        <h1> Loading.. </h1> :
                        <div>
                            {props.searchItem.map((e) => {
                                return (
                                    <h1>{e.title}</h1>
                                )
                            })}
                        </div>} */}
                        {renderSearchResults()}

            </Container >
        </>
    )
}