import React from 'react'
import { Container, Typography, Box, Card, CardHeader, CardMedia, CardContent, Divider} from '@mui/material'

export default function Listing(props) {
    return (
        <React.Fragment>
            <Container>

                <Typography
                    sx={{ padding: '1rem' }}
                    component='h2' variant='h2' color='text.primary'>All Articles</Typography>



                {
                    props.data.map(
                        each => {
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
                                        alt='Honey and Coconut Oil' />
                                    <CardContent>
                                        <Typography variant='body1' color='text.primary' component='p'>
                                            The Why: {each.description}
                                            <br />
                                            Difficulty: {each.description}
                                            <br />
                                            Time: {each.duration}

                                        </Typography>
                                        <Divider color='secondary'> Instructions </Divider>
                                        {
                                            each.instructions.map((i, ind) =>
                                                <Box sx={{
                                                    padding:'1rem',
                                                    
                                                }}
                                                key={ind}>
                                                    <Typography variant='body2' component='p' >
                                                        <span>{i} </span>
                                                    </Typography>
                                                </Box>
                                            )}
                                    </CardContent>

                                </Card>
                            )
                        })
                }

            </Container >
        </React.Fragment>
    )
}