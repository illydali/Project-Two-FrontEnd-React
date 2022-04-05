import React from "react"
import axios from "axios"
import Listing from "./Listing"
import BottomNav from './BottomNav'
import Home from './Home'
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material'
import MyTheme from './MyTheme.js'
import ContributeForm from "./ContributeForm";
import { ThemeProvider } from "@emotion/react"
import ArticleInfo from "./ArticleInfo"




export default class Articles extends React.Component {
    BASE_API_URL = "https://beauty-from-home.herokuapp.com";
    // BASE_API_URL = "https://3000-illydali-projecttwoexpre-w0e88ixe9ed.ws-us38.gitpod.io"

    state = {
        'active': 'home',
        'loaded': false,
        'allData': [],
        'ingredients': [],
        'displayMore': false,
        'articleInfo': [],

        // search 
        'title': "",
        'description': '',
        'body_tags': "",
        'duration': '',
        'searchItem': [],
        'displaySearch': false,

        // form
        'form_user_name': "",
        'form_title': "",
        'form_email': "",
        'form_description': "",
        'form_image': "",
        'form_ingredients_tag': "",
        'form_quantity': "",
        "form_body_tags": "",
        'form_skin_concern': '',
        'form_duration': "",
        'form_instructions': [],
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addContributeForm = async () => {
        let formData = {
            title: this.state.form_title,
            email: this.state.form_email,
            image: this.state.form_image,
            description: this.state.form_description,
            ingredients: this.state.form_ingredients_tag,
            body_tags: this.state.form_body_tags,
            skin_concern: this.form_skin_concern,
            duration: this.state.form_duration,
            quantity: this.state.form_quantity,
            // difficulty: this.state.new_difficulty,
            instructions: this.state.form_instructions,

        }

        let response = await axios.post(this.BASE_API_URL + "/article", formData)
        console.log(response.data)
    }

    fetchData = async () => {
        let response = await axios.get(this.BASE_API_URL + "/articles")
        this.setState({
            'allData': response.data.article
        })
    }

    fetchIngredients = async () => {
        let response = await axios.get(this.BASE_API_URL + '/ingredients')

        this.setState({
            'ingredients': response.data.ingredients
        })
    }

    componentDidMount() {
        this.fetchData()
        this.fetchIngredients()
    }

    renderContent() {
        if (this.state.active === "listing") {
            return (
                <React.Fragment>
                    <Listing
                        allData={this.state.allData}
                        articleInfo={this.state.articleInfo} 
                        // displayMore={this.state.displayMore}
                        viewArticle={this.viewArticle}
                    />
                </React.Fragment>

            );
        } if (this.state.active === "addpost") {
            return (
                <React.Fragment>
                    <ContributeForm
                        setActive={this.setActive}
                        title={this.state.form_title}
                        email={this.state.form_email}
                        description={this.state.form_description}
                        image={this.state.form_image}
                        duration={this.state.form_duration}
                        body_tags={this.state.form_body_tags}
                        instuctions={this.state.form_instructions}
                        skin_concern={this.state.form_skin_concern}
                        updateFormField={this.updateFormField}
                        ingredients={this.state.ingredients}
                        ingredients_tag={this.state.form_ingredients_tag}
                        addContributeForm={this.addContributeForm} />
                </React.Fragment>
            );
        } if (this.state.active === 'home') {
            return (
                <React.Fragment>
                    <Home
                        setActive={this.setActive}
                        title={this.state.title}
                        description={this.state.description}
                        duration={this.state.duration}
                        body_tags={this.state.body_tags}
                        skin_concern={this.state.skin_concern}
                        allData={this.state.allData}
                        updateFormField={this.updateFormField}
                        ingredients={this.state.ingredients}
                        ingredients_tag={this.state.ingredients_tag}
                        searchItem={this.state.searchItem}
                        getSearch={this.getSearch}
                        handleCheckbox={this.handleCheckbox}
                        displaySearch={this.state.displaySearch}
                    />
                </React.Fragment>
            );
        } else if (this.state.active === 'view') {
            return (
                <React.Fragment>
                    <ArticleInfo
                        setActive={this.setActive}
                        articleInfo={this.state.articleInfo} 
                        />
                </React.Fragment>
            )

        }
    }

    setActive = (page) => {
        this.setState({
            'active': page,
            'displayMore' : false,
        });
    };

    // filterSearch(data, searchItem) {
    //     const result = data.filter(
    //         (data) => 
    //         data.title.toLowerCase().includes(searchItem)) ||
    //         data.description.toLowerCase().includes(searchItem) ||
    //         data.ingredients.toLowerCase().includes(searchItem)
    //     this.setState({
    //         searchItem: result
    //     })

    // }

    getSearch = async (e) => {
        // let searchItem = []

        // await axios.get(this.BASE_API_URL + '/articles/search').then((res) => {
        //     if (res.data.success) {
        //         this.filterContent(res.data.posts, searchItem)
        //     }
        // })
        let search = await axios.get(this.BASE_API_URL + "/articles/search", {
            params: {
                'title': this.state.title,
                'description': this.state.description,
                'body_tags': this.state.body_tags,
                'duration': this.state.duration
            }
        })
        this.setState({
            'searchItem': search.data,
            'displaySearch': true

        })
        console.log(search)
    }
   
    viewArticle = async (id) => {

        let articleId = id
        let results = await axios.get(this.BASE_API_URL + "/article/" + articleId)
        console.log(results.data)

        this.setState({
            'articleInfo': results.data,
            'displayMore': true,
            'active' : 'view'
        })
    }

    handleCheckbox = (e) => {

    }

    // handleDelete = async (id) => {


    //     await axios.delete(this.BASE_API_URL + '/article/', id{
    //         method: 'DELETE'
    //     })

    //     const newPosts = posts.filter(post => post.id != id)
    // }

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
                
                {/* <BottomNav /> */}

            </ThemeProvider >

        )

    }
}