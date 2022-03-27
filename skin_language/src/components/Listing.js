import React from "react"
import { Container, Typography, Box, Card, CardHeader, CardMedia, CardContent } from '@mui/material'
import RecipeReviewCard from "./Card.js"
export default function Listing(props) {
    return (
        <React.Fragment>
            <Container>
                <div>
                    <Typography variant="h2" color="text.primary">All Articles</Typography>
                </div>


                {
                    props.data.map(
                        each => {
                            return (
                                <Card key={each._id}>
                                    <CardHeader
                                        title={
                                            each.title}
                                        date={each.date} />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={each.image}
                                        alt="Honey and Coconut Oil" />
                                    <CardContent>
                                        <Typography variant="body2" color="text.primary">
                                            The Why: {each.description}
                                            <br/>
                                            Difficulty: {each.difficulty}
                                            <br/>
                                            Time: {each.duration}
                                            
                                            </Typography>
                                        {
                                            each.instructions.map((i, ind) =>
                                                <p key={ind}>
                                                    <span>{i} </span>
                                                </p>
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