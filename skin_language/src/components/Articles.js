import React from "react"
import axios from "axios"
import Listing from "./Listing"

import { AppBar, Box, Toolbar, Typography, Button, Container, Tabs, Tab } from '@mui/material'
import MyTheme from './MyTheme.js'
import ContributeForm from "./ContributeForm";
import {  ThemeProvider } from "@emotion/react"
import RecipeReviewCard from "./Card"



export default class Articles extends React.Component {
    BASE_API_URL = "https://beauty-from-home.herokuapp.com";

    state = {
        'active': 'listing',
        'data': []
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
        if (this.state.active === "listing") {
            return (
                <React.Fragment>
                    <Listing data={this.state.data} />
                </React.Fragment>

            );
        } else if (this.state.active === "addpost") {
            return (
                <React.Fragment>
                    <ContributeForm />
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
            <Container>
                <ThemeProvider theme={MyTheme}>
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar color="primary" position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {/* <Button 
                                    // sx={{marginLeft:'auto'}}
                                    color="inherit" onClick={() => this.setActive("listing")}>Browse</Button> */}
                                    
                                    <Tabs 
                                    sx={{display:'flex', alignItems:'center'}}
                                     textColor="text">
                                    
                                        <Tab label="Browse" onClick={() => this.setActive("listing")}>Browse</Tab>
                                        <Tab label="Create" onClick={() => this.setActive("addpost")}>Create</Tab>
                                        </Tabs>
                                    
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </Box>
                    {this.renderContent()}
                <RecipeReviewCard/>
                </ThemeProvider>
            </Container>
        )

    }
}