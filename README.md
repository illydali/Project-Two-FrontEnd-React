# Project-Two-FrontEnd-React 

Access live link: https://skin-language.netlify.app/

A MERN stack project for Trent Global College. 
Backend github link - https://github.com/illydali/Project-Two-Express 

# Strategy

Allow users to have access to a crowd-sourced website where they can easily filter and update information about homemade masks they may have come across or created. 

## Site Owner’s Goals
- As a website owner, I want to have a dynamic space for users of my website to check out and add new recipes that they may have tried. 
- As a website owner, I want users to be able to add their comments for each recipe. 

## User Goals
- As a user of the website, I want to be able to easily find beauty recipes for homemade facial masks so that I can save time.
- As a user of the website, I want to have somewhere to share my own homemade recipes so that I can keep track of them. 
- As a user, I want to be able to add in my comments for recipes I have tried so that I can share my feedback. 

# Scope

## Functional Features
- Home page for handling search
- Navigation bar to move between 3 main pages
- Browse page to allow user to sift through all articles
- Search Bar to find an article
- Search filters for finding by skin type, body parts or duration
- User contributions
    - Submitting an article
    - Editing selected portions of article
    - Allowing delete of an article
    - Adding in comments
    - Editing of comments
    - Deleting of comments

## Non-functional Features
- Mobile responsiveness
- An overall pleasing user experience 

# Structure & Skeleton

![Project Skeleton](public/images/Skin_Lang_Skeleton.png?raw=true "Project Skeleton")

As this is a single page application, user can navigate through three main buttons in the Navbar
1. Home Page contains search box and filters to search for data. Clcking on Learn More when search
results populates brings user to the full article.
2. From Browse button, user can view all articles available. Clcking on Learn More in each Article card 
brings user to full acticle. 
3. From article page, user is able to edit or delete article.
4. Also from article page, user is able to add/edit or delete comments. 
5. Create button brings user to form page where a user can submit an article. 

# Surface
## Theme Colors
Colors selected to relate to skin and gies off a calming effect when using the website. 

![Color Palette Theme](/public/images/Skin_Lang_Color_Palette.png?raw=true "Color Palette Theme")

## Font
Font selected is [Roboto](https://fonts.google.com/specimen/Roboto)

## Testing
### Landing Page 
| Category | Actions | Outputs |
| --- | --- | --- |
| Overall | On Load | Carousel auto plays |
| Browse Link |	On Click | Renders all available articles in card form 	|
| Search Bar | Typing on field | Text is read |
| Filter | Filter Duration | Drop down changes to selected duration	|	
| Filter | Filter Body Tags	| Drop down changes to selected tag	|
| Selecting Checkbox | On Select | Highlights box |	
| Search Button	| On Click	| Submits parameters for search		|
| Reset Search	| On click	| Resets search results and parameters |		

### Browse Page
| Category | Actions | Outputs |
| --- | --- | --- |
| Articles | On Click of Browse Link | All articles rendered in card form	|
| Learn More	| On Click | Opens up to full article information |	
| Delete Button|	On Click| Handles delete of document 	|
| Edit Icon 	| On Click	| Opens up edit page with selected parameters filled	|
| Add Comment | On Click | Submits and renders added comment on page	|
| Edit Comment Icon | On Click | Add comment text field switches to allow edit with inputs filled |		
| Delete Comment | On Click| Deletes comment from page |

### Create Page
| Category | Actions | Outputs |
| --- | --- | --- |
| Form fields | Text Input | Form updated as user is typing	|		
| Check Box | On Select	  | Captures selected boxes	|		
| Dropdown	|Filter Body Tags |Captures selected tag |		
| Submit Button | Form Validation| Validation runs and error is shown if not completed	|		

# Technologies Used
- React
- MUI v5
- React Bootstrap
- Memory js for basic date-time conversions
- NodeJs for backend API routes
- Axios 
- MongoDb for database info 

# Deployment
- Deployment was done using Netlify 
- Backend deployment done on Heroku

# Credits 
- Pexels.com 
- Unsplash.com
- Stack overflow 
- [Paul Chor](https://github.com/kunxin-chor)
- [Ace Ang](https://github.com/99Ace)
