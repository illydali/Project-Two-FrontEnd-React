import { React } from 'react'
import {
    Container, Paper, Typography, Card, CardHeader, CardMedia, CardContent, Button, CardActions,
    Divider, Box, ButtonGroup, TextField
} from '@mui/material'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ThemeProvider } from '@emotion/react';
import MyTheme from './MyTheme';

export default function ArticleInfo(props) {

    return (
        <>
            <Container >
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
                                                    {/* What you need: {
                                                        a.ingredients.map((i) =>
                                                            <Box key={i._id}>
                                                                <Typography variant='body2' component='p' >
                                                                    {i.name}
                                                                    {i.quantity}
                                                                </Typography>
                                                            </Box>
                                                        )
                                                    } */}
                                                    <br />
                                                    Time: {a.duration}

                                                </Typography>
                                                <CardActions>
                                                    <ButtonGroup >
                                                        <Button size="small"
                                                            onClick={() => { props.editArticle(a._id) }}>Edit</Button>
                                                        <Button size="small"
                                                            onClick={() => { props.handleDelete(a._id) }}>Delete</Button>
                                                    </ButtonGroup>
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

                                                <Divider color='secondary'> Comments </Divider>

                                                {props.commentsData.map((c, ind) => (
                                                    <Box key={ind}>
                                                        <p>{c.username}</p>
                                                        <p>{c.email}</p>
                                                        <p>{c.text}</p>
                                                        <p>{c.date}</p>
                                                    </Box>
                                                ))}


                                            </CardContent>
                                        </Card>
                                    )
                                })}

                        {/* Comments section */}

                        <Box>
                            <Typography>Leave a comment</Typography>
                            <Box>
                                <TextField label='New Comment'>Name</TextField>
                                <input type="text"
                                    className="form-control"
                                    name="new_comment_name"
                                    value={props.new_comment_name}
                                    onChange={props.updateFormField}
                                    placeholder="Your name" />
                            </Box>
                            <Box>
                                <label className="form-label">Comment</label>
                                <textarea className="form-control"
                                    name="new_comment_text"
                                    value={props.new_comment_text}
                                    onChange={props.updateFormField}
                                    placeholder="Your comments"
                                />
                            </Box>
                            <Button size="small"
                                onClick={props.addComment}>Post Comment</Button>

                        </Box>

                    </Paper>
                </ThemeProvider>
            </Container>
        </>
    )
}