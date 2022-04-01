import React from "react"
import axios from "axios"
import Listing from "./Listing"
import Home from './Home'
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material'
import MyTheme from './MyTheme.js'
import ContributeForm from "./ContributeForm";
import { ThemeProvider } from "@emotion/react"




export default class Articles extends React.Component {
    BASE_API_URL = "https://beauty-from-home.herokuapp.com";

    state = {
        'active': 'home',
        'data': [],
        'ingredients': [],

        // search 
        'searchTitle': "",
        'desc': "",
        'searchTags': [],
        'searchTime': "",
        'searchItem': [],

        // form
        'user_name': "",
        'title': "",
        'email': "",
        'description': "",
        'image': "",
        'ingredients_tag': "",
        "body_tags": "",
        'skin_concern': '',
        'duration': "",
        'instructions': "",
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addContributeForm = async () => {
        let formData = {
            title: this.state.title,
            email: this.state.email,
            image: this.state.image,
            description: this.state.description,
            ingredients: this.ingredients_tag,
            body_tags: this.state.body_tags,
            skin_concern: this.skin_concern,
            duration: this.state.duration,
            // difficulty: this.state.new_difficulty,
            instructions: this.state.instructions,
           
        }

        let response = await axios.post(this.BASE_API_URL + "/article", formData)
        console.log(response)
    }

    fetchData = async () => {
        let response = await axios.get(this.BASE_API_URL + "/articles")
        this.setState({
            'data': response.data.article
        })
    }

    fetchIngredients = async () => {
        let response = await axios.get(this.BASE_API_URL + '/ingredients')

        this.setState({
            'ingredients': response.data.ingredients
        })
        console.log(response.data)
    }

    componentDidMount() {
        this.fetchData()
        this.fetchIngredients()
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
                    <ContributeForm
                        setActive={this.setActive}
                        title={this.state.title}
                        email={this.state.email}
                        description={this.state.description}
                        image={this.state.image}
                        duration={this.state.duration}
                        body_tags={this.state.body_tags}
                        instuctions={this.state.instructions}
                        skin_concern={this.state.skin_concern}
                        updateFormField={this.updateFormField}
                        ingredients={this.state.ingredients}
                        ingredients_tag={this.state.ingredients_tag}
                        addContributeForm={this.addContributeForm} />
                </React.Fragment>
            );
        } else if (this.state.active === 'home') {
            return (
                <React.Fragment>
                    <Home
                        setActive={this.setActive}
                        searchItem={this.state.searchItem}
                        search_title={this.state.searchTitle}
                        desc={this.state.desc}
                        searchTime={this.state.searchTime}
                        searchTags={this.state.searchTags}
                        data={this.state.data}
                        body_tags={this.body_tags}
                        skin_concern={this.state.skin_concern}
                        updateFormField={this.updateFormField}
                        ingredients={this.state.ingredients}
                        ingredients_tag={this.state.ingredients_tag} />
                </React.Fragment>
            )
        }
    }

    setActive = (page) => {
        this.setState({
            active: page
        });
    };

    getSearch = async () => {

        let queryString = ""

        // search by title
        if (this.state.search_title) {
            queryString += `search_title=${this.state.search_title}`
        }
       
        let searchResults = await axios.get(this.BASE_API_URL + "/articles/search?" + queryString)

        this.setState({
            searchItem: searchResults.data
        })
    }



    render() {
        return (

            <ThemeProvider theme={MyTheme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar color="primary" position="static">
                        <Toolbar id='appBar'>

                            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
                            <Button
                                // sx={{marginLeft:'auto'}}
                                color="inherit" onClick={() => this.setActive("listing")}>Browse</Button>
                            {/* fix logo and home button */}

                            <Typography variant="h5" >
                                <Button color="inherit" onClick={() => this.setActive("home")}>
                                    BEAUTYHACKS
                                </Button>
                            </Typography>

                            <Button

                                color="inherit" onClick={() => this.setActive("addpost")}>Create</Button>
                            {/* </Typography> */}

                        </Toolbar>
                    </AppBar>
                </Box>
                {this.renderContent()}


            </ThemeProvider >

        )

    }
}