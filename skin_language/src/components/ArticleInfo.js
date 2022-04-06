import { React } from 'react'
import moment from 'moment'
import {
    Container, Paper, Typography, Card, CardHeader, CardMedia, CardContent, Button, CardActions,
    Divider, Box, TextField, Input, Avatar
} from '@mui/material'
import Form from 'react-bootstrap/Form'

import IconButton from '@mui/material/IconButton'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { ThemeProvider } from '@emotion/react';
import MyTheme from './MyTheme';
import CustomizedDialogs from './DialogModal';

export default function ArticleInfo(props) {

    return (
        <>
            <Container >
                <ThemeProvider theme={MyTheme}>
                    <Paper>

                        {
                            props.articleInfo.map(
                                a => {
                                    return (

                                        <Card key={a._id}>
                                            <CardHeader
                                                component="h1"
                                                title={a.title}
                                                date={a.date}
                                                action={
                                                    <Button aria-label="delete" onClick={() => { props.handleDelete(a._id) }}>
                                                        <DeleteForeverIcon />
                                                    </Button>
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
                                                    <br />
                                                    Submitted: {moment(a.date).format('dddd, MMMM Do YYYY')}

                                                </Typography>
                                                <CardActions>
                                                    <Button size="small"
                                                        onClick={() => { props.editArticle(a._id) }}>
                                                        <ModeEditOutlineTwoToneIcon />
                                                    </Button>

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
                                                <Box>
                                                {props.commentsData.map((c, ind) => (
                                                    <Box sx={{ m: 1}} key={ind}>

                                                        {/* <p>{c.email}</p> */}

                                                        <Typography>{c.text}</Typography>
                                                        <Avatar sx={{ width: 24, height: 24, bgcolor: 'secondary' }}>{c.username[0]} </Avatar>
                                                        <Typography>{c.username}</Typography>
                                                        <Typography>{moment(c.date).format('dddd, MMMM Do YYYY')}</Typography>
                                                        <br />
                                                        <ModeEditOutlineTwoToneIcon 
                                                            color='secondary'
                                                            onClick={props.editComment}
                                                            />
                                                        <DeleteForeverIcon 
                                                            color='secondary'
                                                            onClick={() => (console.log('clicked'))}
                                                            />
                                                    </Box>
                                                ))}
                                                </Box>
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="formBasicUsername">

                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Username"
                                                            name="addCommentUsername"
                                                            value={props.addCommentUsername}
                                                            onChange={props.updateFormField}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="mb-3" controlId="formBasicText">

                                                        <Form.Control
                                                            as="textarea" rows={2}
                                                            placeholder="Enter Comment"
                                                            name="addCommentText"
                                                            value={props.addCommentText}
                                                            onChange={props.updateFormField}
                                                        />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                                        <Form.Control
                                                            type="password"
                                                            placeholder="Enter Email"
                                                            name="addCommentEmail"
                                                            value={props.addCommentEmail}
                                                            onChange={props.updateFormField}
                                                            autoComplete="false"
                                                        />
                                                    </Form.Group>
                                                    <Button size="small" variant="contained"
                                                        onClick={props.addComment}>Add Comment</Button>
                                                </Form>


                                            </CardContent>
                                        </Card>
                                    )
                                })}

                    </Paper>
                </ThemeProvider>
            </Container>
        </>
    )
}