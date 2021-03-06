import React from "react"
import axios from "axios"
import Listing from "./Listing"
import Home from './Home'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import MyTheme from './MyTheme.js'
import ContributeForm from "./ContributeForm";
import { ThemeProvider } from "@emotion/react"
import ArticleInfo from "./ArticleInfo"
import EditArticle from "./EditArticle"
import { validTitle, validImageLink, validDescription, validTags, validIngredients, validDuration, validInstructions, validSkinConcern } from "./Validate"
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';

const initialValidationState = {
    'title': [true, ''],
    'image': [true, ''],
    'description': [true, ''],
    'body_tags': [true, ''],
    'ingredients': [true, ''],
    'duration': [true, ''],
    'instructions': [true, ''],
    'skin_concern': [true, '']
}

export default class Articles extends React.Component {
    BASE_API_URL = "https://beauty-from-home.herokuapp.com";
    // BASE_API_URL = "https://3000-illydali-projecttwoexpre-w0e88ixe9ed.ws-us39.gitpod.io"

    state = {
        'active': 'home',
        'loaded': false,
        'allData': [],
        'skin': [],
        'skinOptions': [],
        'displayMore': false,
        'articleInfo': [],
        'commentsData': [],
        'articleBeingShown': 0,

        // search 
        'title': '',
        'description': '',
        'body_tags': "",
        'duration': '',
        'searchItem': [],
        'displaySearch': false,

        // form state for edit and add new
        'form_title': '',
        'form_email': '',
        'form_description': '',
        'form_image': '',
        'form_ingredients': '',
        "form_body_tags": '',
        'form_skin_concern': [],
        'formSkinOptions': [],
        'form_duration': null,
        'form_instructions': '',
        'articleIdBeingEdited': '',

        // comments section
        'addCommentUsername': '',
        'addCommentText': '',
        'addCommentEmail': '',
        'commentIdToUpdate': '',
        'editCommentUsername': '',
        'editCommentText': '',
        'editCommentEmail': '',
        'displayEditComment': false,
        'errorForm': initialValidationState

    }

    fetchData = async () => {
        let response = await axios.get(this.BASE_API_URL + "/articles")

        this.setState({
            'allData': response.data.article,
            'loaded': true

        })
    }

    componentDidMount() {
        this.fetchData()
    }


    setActive = (page) => {
        this.setState({
            'active': page,
            'displayMore': false,
        });
    };


    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    getSearch = async (e) => {

        let search = await axios.get(this.BASE_API_URL + "/articles/search", {
            params: {
                'title': this.state.title,
                'description': this.state.description,
                'body_tags': this.state.body_tags,
                'duration': this.state.duration,
                'skin_concern': this.state.skinOptions
            }
        })
        console.log(search.data)
        this.setState({
            'searchItem': search.data,
            'displaySearch': true,
            'title': '',
            'description': '',
            'body_tags': '',
            'duration': '',
            'skinOptions': []

        })
        console.log(search)
    }

    refreshSearch = async () => {
        this.setState({
            'searchItem': '',
            'displaySearch': false,
            'title': '',
            'description': '',
            'body_tags': '',
            'duration': '',
            'skinOptions': []
        })
    }

    validate = (formData) => {
        this.setState({
            errorForm: initialValidationState
        })

        let errorTitle = validTitle(formData.title)
        let errorImage = validImageLink(formData.image)
        let errorDescription = validDescription(formData.description)
        let errorTags = validTags(formData.body_tags)
        let errorIngredients = validIngredients(formData.ingredients)
        let errorDuration = validDuration(formData.duration)
        let errorInstructions = validInstructions(formData.instructions)
        let errorSkin = validSkinConcern(formData.skin_concern)
        console.log(errorTitle)
        if (!errorTitle[0] ||
            !errorImage[0] ||
            !errorDescription[0] ||
            !errorTags[0] ||
            !errorIngredients[0] ||
            !errorDuration[0] ||
            !errorInstructions[0] ||
            !errorSkin[0]
        ) {
            let errorData = {
                'title': errorTitle,
                'image': errorImage,
                'description': errorDescription,
                'body_tags': errorTags,
                'ingredients': errorIngredients,
                'duration': errorDuration,
                'instructions': errorInstructions,
                'skin_concern': errorSkin
            }
            this.setState({
                errorForm: errorData
            })

            return false
        } else {
            return true
        }
    }

    addContributeForm = async () => {
        let formData = {
            title: this.state.form_title,
            email: this.state.form_email,
            image: this.state.form_image,
            description: this.state.form_description,
            ingredients: this.state.form_ingredients,
            body_tags: this.state.form_body_tags,
            skin_concern: this.state.formSkinOptions,
            duration: this.state.form_duration,
            instructions: this.state.form_instructions,

        }
        console.log(formData)
        console.log(this.state.form_title)
        console.log(this.validate(formData))
        if (this.validate(formData)) {
            let response = await axios.post(this.BASE_API_URL + "/article", formData)
            console.log(response.data)
            // clone
            let clone = this.state.allData.slice();
            // modify
            clone.push(formData);
            // replace

            this.setState({
                'active': 'listing',
                'allData': clone
            })
        }
    }

    viewArticle = async (id) => {

        let articleId = id
        let results = await axios.get(this.BASE_API_URL + "/article/" + articleId)
        console.log(results.data)

        this.setState({
            'articleInfo': results.data,
            'displayMore': true,
            'active': 'view',
            'articleBeingShown': articleId
        })
    }

    editArticle = async (id) => {
        let idToEdit = this.state.allData.find(function (a) {
            return a._id === id
        })
        console.log(idToEdit)

        this.setState({
            'active': 'edit',
            displayMore: false,
            'form_title': idToEdit.title,
            'form_description': idToEdit.description,
            'form_image': idToEdit.image,
            'form_duration': idToEdit.duration,
            'form_instructions': idToEdit.instructions,
            'articleIdBeingEdited': idToEdit._id

        })

    }

    updateArticle = async () => {
        let newData = {
            title: this.state.form_title,
            image: this.state.form_image,
            description: this.state.form_description,
            instructions: this.state.form_instructions,
            duration: this.state.form_duration
        }

        let articleIdBeingEdited = this.state.articleIdBeingEdited
        console.log(articleIdBeingEdited)
        let update = await axios.patch(this.BASE_API_URL + '/article/' + articleIdBeingEdited, newData)
        console.log(update.data)

        let indexToReplace = this.state.allData.findIndex((data) => {
            return data._id === articleIdBeingEdited
        })

        let editedArticle = {
            title: this.state.form_title,
            image: this.state.form_image,
            description: this.state.form_description,
            instructions: this.state.form_instructions,
            duration: this.state.form_duration
        }

        let cloned = [
            // put in the tasks before the index to replace
            ...this.state.allData.slice(0, indexToReplace),
            editedArticle,
            ...this.state.allData.slice(indexToReplace + 1)

        ]

        this.setState({
            'active': 'view',
            'allData': cloned,
            displayMore: true,
            'articleIdBeingEdited': '',
            'form_title': '',
            'form_description': '',
            'form_image': '',
            'form_duration': '',
            'form_instructions': '',
        })

    }

    cancelEdit = async () => {
        this.setState({
            'active': 'view',
            'articleIdBeingEdited': '',
            displayEditComment: false
        })

    }

    handleDelete = async (id) => {
        console.log(id)

        await axios.delete(this.BASE_API_URL + '/article/' + id)
        let cloned = this.state.allData.slice();
        // modify the array
        let indexToDelete = this.state.allData.findIndex((i) => {
            return i._id === id
        })
        // remove from array
        cloned.splice(indexToDelete, 1);

        this.setState({
            'active': "listing",
            'allData': cloned
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

    addComment = async () => {
        let data = {
            username: this.state.addCommentUsername,
            text: this.state.addCommentText,
            email: this.state.addCommentEmail
        }

        let articleId = this.state.articleBeingShown

        let newComment = await axios.post(this.BASE_API_URL + '/article/' + articleId + '/comments/create', data)
        console.log(newComment)
        // clone
        let clone = this.state.commentsData.slice();
        // modify
        clone.push(data);
        // replace

        this.setState({
            'commentsData': clone,
            'addCommentUsername': '',
            'addCommentText': '',
            'addCommentEmail': ''
        })
        console.log(this.state.commentsData)
    }

    editComment = (id, username, text, email) => {
        let idToEdit = this.state.commentsData.find(function (c) {
            return c._id === id
        })
        console.log(idToEdit)

        this.setState({
            commentIdToUpdate: id,
            editCommentUsername: username,
            editCommentText: text,
            editCommentEmail: email,
            displayEditComment: true
        })
    }

    updateComment = async () => {
        let newCommentData = {
            username: this.state.editCommentUsername,
            text: this.state.editCommentText,
            email: this.state.editCommentEmail,
        }

        let articleId = this.state.articleBeingShown
        console.log(articleId)
        console.log(newCommentData)

        let commentIdToUpdate = this.state.commentIdToUpdate
        let newData = await axios.put(this.BASE_API_URL + '/article/' + articleId + '/comments/' + commentIdToUpdate, newCommentData)
        console.log(newData.data)
        console.log(commentIdToUpdate)

        let indexToReplace = this.state.commentsData.findIndex((e) => {
            return e._id === commentIdToUpdate
        })

        let modifiedTask = {
            _id: this.state.commentsData[indexToReplace]._id,
            text: this.state.editCommentText,
            username: this.state.editCommentUsername,
        }

        let cloned = [
            // put in the tasks before the index to replace
            ...this.state.commentsData.slice(0, indexToReplace),
            modifiedTask,
            ...this.state.commentsData.slice(indexToReplace + 1)

        ]

        this.setState({
            'commentsData': cloned,
            'editCommentUsername': '',
            'editCommentText': '',
            'editCommentEmail': '',
            displayEditComment: false

        })
    }

    deleteComment = async (id) => {

        let deleteCommentId = id
        let articleId = this.state.articleBeingShown
        console.log(deleteCommentId)
        console.log(articleId)

        // delete comment
        await axios.delete(this.BASE_API_URL + '/article/' + articleId + '/comments/' + deleteCommentId)

        // cloning comments array
        let cloned = this.state.commentsData.slice();
        // modify the array
        let indexToDelete = this.state.commentsData.findIndex((i) => {
            return i._id === deleteCommentId
        })
        // remove from array
        cloned.splice(indexToDelete, 1);

        this.setState({
            'commentsData': cloned
        })
    }

    handleCheckbox = (e) => {
        if (this.state[e.target.name].includes(e.target.value)) {
            let indexToRemove = this.state[e.target.name].findIndex(v => {
                return v === e.target.value
            })
            let cloned = this.state[e.target.name].slice();
            cloned.splice(indexToRemove, 1);
            this.setState({
                [e.target.name]: cloned
            })
        } else {
            let clone = this.state[e.target.name].slice();
            clone.push(e.target.value);
            this.setState({
                [e.target.name]: clone
            })
        }
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
                        formSkinOptions={this.state.formSkinOptions}
                        updateFormField={this.updateFormField}
                        ingredients={this.state.form_ingredients}
                        addContributeForm={this.addContributeForm}
                        errorForm={this.state.errorForm}
                        handleCheckbox={this.handleCheckbox}

                    />
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
                        searchItem={this.state.searchItem}
                        getSearch={this.getSearch}
                        handleCheckbox={this.handleCheckbox}
                        displaySearch={this.state.displaySearch}
                        refreshSearch={this.refreshSearch}
                        skinOptions={this.state.skinOptions}
                        articleInfo={this.state.articleInfo}
                        commentsData={this.state.commentsData}
                        viewComments={this.viewComments}
                        viewArticle={this.viewArticle}
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
                        addCommentUsername={this.state.addCommentUsername}
                        addCommentText={this.state.addCommentText}
                        addCommentEmail={this.state.addCommentEmail}
                        addComment={this.addComment}
                        updateFormField={this.updateFormField}
                        editComment={this.editComment}
                        commentIdToUpdate={this.state.commentIdToUpdate}
                        editCommentUsername={this.state.editCommentUsername}
                        editCommentText={this.state.editCommentText}
                        editCommentEmail={this.state.editCommentEmail}
                        displayEditComment={this.state.displayEditComment}
                        cancelEdit={this.cancelEdit}
                        updateComment={this.updateComment}
                        deleteComment={this.deleteComment}
                    >
                    </ArticleInfo>
                </React.Fragment>
            )

        } if (this.state.active === 'edit') {
            return (
                <React.Fragment>
                    <EditArticle
                        setActive={this.setActive}
                        articleInfo={this.state.articleInfo}
                        form_title={this.state.form_title}
                        form_email={this.state.form_email}
                        form_description={this.state.form_description}
                        form_image={this.state.form_image}
                        form_duration={this.state.form_duration}
                        form_body_tags={this.state.form_body_tags}
                        form_instructions={this.state.form_instructions}
                        form_ingredients={this.state.form_ingredients}
                        form_skin_concern={this.state.form_skin_concern}
                        updateFormField={this.updateFormField}
                        articleIdBeingEdited={this.state.articleIdBeingEdited}
                        updateArticle={this.updateArticle}
                        cancelEdit={this.cancelEdit}
                    />
                </React.Fragment>
            )

        }
    }


    render() {
        return (

            <ThemeProvider theme={MyTheme}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar color="primary" position="static" component='nav'>
                        <Toolbar id='appBar'>

                            <Box>
                                <Button sx={{ display: { xs: 'none', sm: 'none', md: 'inline', lg: 'inline' } }}
                                    color="info" onClick={() => this.setActive("listing")}>
                                    Browse</Button>
                                <IconButton onClick={() => this.setActive("listing")}>
                                    <FilterNoneIcon color='info' />
                                </IconButton>
                            </Box>

                            <Typography variant="h5" >
                                <Button sx={{fontSize:'large', fontWeight: 'strong'}} color="info" onClick={() => this.setActive("home")}>
                                    Skin.Lang
                                </Button>
                            </Typography>
                            <Box>
                                <Button
                                    sx={{ display: { xs: 'none', sm: 'none', md: 'inline', lg: 'inline' } }}
                                    color="info" onClick={() => this.setActive("addpost")}>
                                    Create</Button>
                                <IconButton onClick={() => this.setActive("addpost")}>
                                    <AddCircleOutlineIcon color='info' />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>

                {this.renderContent()}

            </ThemeProvider >

        )

    }
}