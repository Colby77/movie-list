console.log('hello world')
console.log('test')

let message = document.querySelector('#message')

const addMovie = (event) => {
    event.preventDefault()
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let unorderedList = document.querySelector('ul')
    
    movieTitle.textContent = inputField.value
    console.log(movieTitle)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    unorderedList.appendChild(movie)
    inputField.value = ''
    deleteBtn.addEventListener('click', deleteMovie)
    movieTitle.addEventListener('click', crossOffMovie)
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    message.textContent = 'Movie deleted!'
}

let form = document.querySelector('form')
form.addEventListener('submit', addMovie)

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked') === true){
        message.textContent = 'Movie watched!'
    }else {
        message.textContent = 'Movie added back!'
    }
}
