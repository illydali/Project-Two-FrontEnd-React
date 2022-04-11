import React from 'react'
import {
    Container, Typography, Box, Card, CardHeader, CardMedia, CardContent,
    CardActions, Button, Grid
} from '@mui/material'

import IconButton from '@mui/material/IconButton'

export default function Listing(props) {

    return (
        <React.Fragment>
            <Container>

                <Typography
                    sx={{ padding: '1rem' }}
                    component='h2' variant='h2'
                    color='text.primary'
                    align='center'
                >All Articles</Typography>
                <Grid
                    container
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="stretch"
                >
                    {
                        props.allData.map(
                            each => {
                                return (
                                    <Grid item xs={12} sm={6} md={6} lg={4} key={each._id}>
                                        <Card sx={{ mb: '1', height: '450' }} >

                                            <CardHeader
                                                component="h1"
                                                title={
                                                    each.title}
                                                date={each.date}
                                                action={
                                                    <IconButton aria-label="delete">

                                                    </IconButton>
                                                }
                                            />
                                            <CardMedia
                                                component='img'
                                                height='200'
                                                image={each.image}
                                                alt={each.title} />
                                            <CardContent>
                                                <Typography variant='body1' color='text.primary' component='section'>
                                                    <Box sx={{ padding: '1rem' }}>The Why: {each.description}</Box>
                                                    <Box sx={{ padding: '1rem' }}>Time needed: {each.duration} mins</Box>

                                                </Typography>
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
                                    </Grid>
                                )
                            })
                    }
                </Grid>
            </Container >
        </React.Fragment>
    )
}