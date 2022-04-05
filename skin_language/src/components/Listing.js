import React from 'react'
import { Container, Typography, Box, Card, CardHeader, CardMedia, CardContent,
CardActions, Button } from '@mui/material'

import IconButton from '@mui/material/IconButton'

export default function Listing(props) {

    return (
        <React.Fragment>
            <Container>

                <Typography
                    sx={{ padding: '1rem' }}
                    component='h2' variant='h2' color='text.primary'>All Articles</Typography>



                {
                    props.allData.map(
                        each => {
                            return (
                                <Card key={each._id}>
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
                                        height='194'
                                        image={each.image}
                                        alt={each.title} />
                                    <CardContent>
                                        <Typography variant='body1' color='text.primary' component='p'>
                                            The Why: {each.description}
                                            <br />
                                            <br />
                                            Time: {each.duration}

                                        </Typography>
                                        <CardActions>
                                            <Button 
                                            size="small" 
                                            onClick={() => {
                                                props.viewArticle(each._id)
                                                props.viewComments(each._id)}
                                                }>
                                                    Learn More</Button>
                                        </CardActions>
                                    </CardContent>

                                </Card>
                            )
                        })
                }

            </Container >
        </React.Fragment>
    )
}