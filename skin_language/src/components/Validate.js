export const validTitle = (str) => {
    if(str === ''){
        return [false, 'Title is required'];
    } else if (str.length < 4) {
        return [false, 'Title length must be more than 4 characters']
    } else {
        return [true , '']
    }
}

export const validImageLink = (str) => {
    if (str === '') {
    return [false, 'Please enter an image URL']
    } else {
        return [true, '']
    }
} 

export const validDescription = (str) => {
    if (str === ''){
        return [false, 'Please enter a description']
    } else if (str.length < 5) {
        return [false, 'Description must be more than 5 characters']
    } else {
        return [true, '']
    }
}

export const validTags = (str) => {
    if (str === '' || str === 'undefined'){
        return [false, 'Please select a tag']
    } else {
        return [true, '']
    }
}

export const validIngredients = (str) => {
    if (str === '') {
        return [false, 'Please enter an ingredient']
    } else {
        return [true, '']
    }
}

export const validDuration = (str) => {
    if (isNaN(str) === '') {
        return [false, 'Duration is required']
    } else {
        return [true, '']
    }
}

export const validInstructions = (str) => {
    if (str === '') {
        return [false, 'Please enter instructions']
    } else {
        return [true, '']
    }
}

export const validSkinConcern = (str) => {
    if (str === '') {
        return [false, 'Select at least one checkbox ']
    } else {
        return [true, '']
    }
}
