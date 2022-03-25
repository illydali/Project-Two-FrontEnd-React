import React from "react"
import axios from "axios"
import AddPost from "./AddPost"
import Main from "./Main"

import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'


export default class Articles extends React.Component {
    BASE_API_URL = "https://beauty-from-home.herokuapp.com";

    state = {
        'active': 'main',
        'data' : []
    }

    fetchData = async () => {
        let response = await axios.get(this.BASE_API_URL + "/articles")
        console.log(response.data)
        this.setState({
            'data': response.data.article
        })
        console.log(this.state.data)
    }

    componentDidMount() {
        this.fetchData()
    }

    renderContent() {
        if (this.state.active === "main") {
            return (
                <React.Fragment>
                    <Main data={this.state.data} />
                </React.Fragment>

            );
        } else if (this.state.active === "addpost") {
            return (
                <React.Fragment>
                    <AddPost />
                </React.Fragment>
            );
        }
    }

    setActive = (page) => {
        this.setState({
            active: page
        });
    };


    render() {
        return (
            <React.Fragment>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar color="secondary" position="static">
                        <Toolbar>
                            {/* <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                // sx={{ mr: 2 }}
                            >
                            </IconButton> */}
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button color="inherit" onClick={() => this.setActive("main")}>Browse</Button> 
                            <Button color="inherit" onClick={() => this.setActive("addpage")}>Create</Button>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                {this.renderContent()}
            </React.Fragment>
        )

    }
}