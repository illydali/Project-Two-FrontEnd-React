import React from 'react'
import { Container, Paper, Typography, Card, CardHeader, CardMedia, CardContent, Button,  CardActions,
Divider, Box } from '@mui/material'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ThemeProvider } from '@emotion/react';
import MyTheme from './MyTheme';

export default function ArticleInfo(props) {

    return (
        <React.Fragment>
            <Container>
                <ThemeProvider theme={MyTheme}>
                    <Paper elevation={1} >

                        {


                            props.articleInfo.map(
                                a => {
                                    return (
                                        <Card key={a._id}>
                                    <CardHeader
                                        component="h1"
                                        title={
                                            a.title}
                                        date={a.date}
                                        action={
                                            <IconButton aria-label="delete">
                                                <DeleteForeverIcon />
                                            </IconButton>
                                        }
                                    />
                                    <CardMedia
                                        component='img'
                                        height='194'
                                        image={a.image}
                                        alt={a.title} />
                                    <CardContent>
                                        <Typography variant='body1' color='text.primary' component='main'>
                                            The Why: {a.description}
                                            <br />
                                            What you need: {
                                                a.ingredients.map((i) =>
                                                <Box key={i._id}>
                                                    <Typography variant='body2' component='p' >
                                                        {i.name}
                                                        {i.quantity}
                                                    </Typography>
                                                    </Box>
                                                )
                                            }
                                            <br />
                                            Time: {a.duration}

                                        </Typography>
                                        <CardActions>
                                            <Button size="small" onClick={() => {props.viewArticle(a._id)}}>Learn More</Button>
                                        </CardActions>
                                        <Divider color='secondary'> Instructions </Divider>
                                        {
                                            a.instructions.map((i, ind) =>
                                                <Box sx={{
                                                    padding: '1rem',

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
                                })}

                                


                        {/* 
                    // <div key={p._id}>
                        
                    //     <h2>{p.title}</h2>
                    //     <p>{p.description}</p>
                    //      <p>By {p.user_name} on {p.date_of_post}</p>
                    //     <hr/>  */}
                        {/* <img src={p.image} className="card-img-top w-25" alt="..." />
                        <p>Difficulty: {p.difficulty}</p>
                        <p>Time required: {p.duration} mins</p>
                        <h5>Supplies</h5>
                        <ol>
                            {p.supplies.map((s, index) => (
                                <li key={index}>
                                    {index+1}. {s}
                                </li>
                            ))}
                        </ol>
                        <h5>How to Do it</h5>
                        {p.instructions.map((i, index) => (
                            <div key={index}>
                                <p>Step {index+1}</p>
                                <p>{i}</p>
                            </div>
                        ))}

                        <p>{p.ingredients.name}</p>
                    </div>  
            ))} */}

                        {/* Comments section */}
                        {/* <div>
                <h4>Leave a comment</h4>
                <div>
                    <label className="form-label">Name</label>
                    <input type="text"
                            className="form-control"
                            name="new_comment_name"
                            value={props.new_comment_name}
                            onChange={props.updateFormField}
                            placeholder="Your name" />
                </div>
                <div>
                    <label className="form-label">Comment</label>
                    <textarea className="form-control"
                            name="new_comment_text"
                            value={props.new_comment_text}
                            onChange={props.updateFormField}
                            placeholder="Your comments"
                    />
                </div>
                <button type="button" className="btn btn-dark"
                        onClick={props.addComment}>Post Comment</button>
                
                {props.comments_data.map((c) => (
                    <div key={c.comment_id}>
                        <p>{c.comment_name}</p>
                        <p>{c.comment_date}</p>
                        <p>{c.comment_text}</p>
                    </div>
                ))}

            </div>
             */}
                    </Paper>
                </ThemeProvider>
            </Container>
        </React.Fragment>
    )
}