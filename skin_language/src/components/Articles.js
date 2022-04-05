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
import EditArticle from "./EditArticle"




export default class Articles extends React.Component {
    // BASE_API_URL = "https://beauty-from-home.herokuapp.com";
    BASE_API_URL = "https://3000-illydali-projecttwoexpre-w0e88ixe9ed.ws-us38.gitpod.io"

    state = {
        'active': 'home',
        'loaded': false,
        'allData': [],
        'ingredients': [],
        'displayMore': false,
        'articleInfo': [],
        'commentsData': [],

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
        'form_ingredients': '',
        'form_quantity': "",
        "form_body_tags": "",
        'form_skin_concern': '',
        'form_duration': "",
        'form_instructions': '',
        'articleIdBeingEdited': ''

        // form edit 

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
            ingredients: this.state.form_ingredients,
            body_tags: this.state.form_body_tags,
            skin_concern: this.form_skin_concern,
            duration: this.state.form_duration,
            instructions: this.state.form_instructions,

        }

        let response = await axios.post(this.BASE_API_URL + "/article", formData)
        console.log(response.data)
        this.setState({
            'active': 'listing',
        })
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
                        commentsData={this.state.commentsData}
                        viewComments={this.viewComments}
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
        } if (this.state.active === 'view') {
            return (
                <React.Fragment>
                    <ArticleInfo
                        setActive={this.setActive}
                        articleInfo={this.state.articleInfo}
                        commentsData={this.state.commentsData}
                        handleDelete={this.handleDelete}
                        editArticle={this.editArticle}
                        
                    />
                </React.Fragment>
            )

        } if (this.state.active === 'edit') {
            return (
                <React.Fragment>
                    <EditArticle
                        setActive={this.setActive}
                        articleInfo={this.state.articleInfo}
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
                        articleIdBeingEdited={this.state.articleIdBeingEdited}
                        updateArticle={this.updateArticle}
                    />
                </React.Fragment>
            )

        }
    }

    setActive = (page) => {
        this.setState({
            'active': page,
            'displayMore': false,
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
            'active': 'view'
        })
    }

    viewComments = async (id) => {
        let articleId = id
        let comments = await axios.get(this.BASE_API_URL + '/article/' + articleId + '/comments')

        let commentsData = []
        if (comments.data[0].comments) {
            commentsData = comments.data[0].comments
        } else {
            commentsData = []
        }

        console.log(commentsData)
        this.setState({
            'commentsData': commentsData,
        })
    }

    handleCheckbox = (e) => {

    }

    editArticle = async () => {
        let idToEdit = this.state.articleInfo[0]
        console.log(idToEdit._id)
        this.setState({
            'active': 'edit',


            'form_title': idToEdit.form_title,
            'form_email': idToEdit.email,
            'form_description': idToEdit.description,
            'form_image': idToEdit.image,
            'form_duration': idToEdit.duration,
            'form_instructions': idToEdit.instructions,
            'articleIdBeingEdited': idToEdit._id

        })

    }

    updateArticle = async () => {
        let newData = {
            title : this.state.form_title,
            image : this.state.form_image,
            description : this.state.form_description,
            instructions : this.state.form_instructions,
            duration : this.state.form_duration
        }

        let articleIdBeingEdited = this.state.articleIdBeingEdited
        console.log(articleIdBeingEdited)
        let update = await axios.put(this.BASE_API_URL + '/article/' + articleIdBeingEdited, newData)
        console.log(update.data)

        this.setState({
            'active': 'listing'
        })

    }

    handleDelete = async () => {
        let idToDelete = this.state.articleInfo[0]._id
        await axios.delete(this.BASE_API_URL + '/article/' + idToDelete)
        this.fetchData()
        this.setState({
            'active': "listing",

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

                {/* <BottomNav /> */}

            </ThemeProvider >

        )

    }
}