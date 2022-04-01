import { React } from 'react'
import Collage from './Collage'
import { Typography, Box, Container, FormControl, MenuItem, InputBase, Select, InputLabel } from '@mui/material'

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles'

const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


export default function Home(props) {

    return (
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
                <Box>
                    <SearchBar>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            name='searchItem'
                            value={props.searchItem}
                            onChange={props.updateFormField}
                        />
                    </SearchBar>
                    <FormControl fullWidth>
                        <InputLabel id="select-filter">Select One</InputLabel>
                        <Select
                            labelId="select-filter"
                            id="filterSelect"

                            value={props.searchTags}
                            name='searchTags'
                            label="SearchTags"
                            onChange={props.updateFormField}
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
                </Box>
            </Typography>
        </Container>
    )
}