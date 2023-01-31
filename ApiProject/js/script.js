//Var to obtain the global container
var container = document.querySelector('#globalContainer');


//Calling the api to obtain the values
obtainGenresMovies('https://api.themoviedb.org/3/genre/movie/list?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES');
obtainGenresTvSeries('https://api.themoviedb.org/3/genre/tv/list?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES');

getMovies('https://api.themoviedb.org/3/movie/popular?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1', 'Popular');
getMovies('https://api.themoviedb.org/3/trending/all/day?api_key=dda4633aacd800647ce023600f1aae38', 'Trending');
getMovies('https://api.themoviedb.org/3/search/movie?api_key=dda4633aacd800647ce023600f1aae38&language=en-US&query=Animaci%C3%B3n&page=1&include_adult=false', 'Anime');
getMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1', 'Upcoming Movies');

//Function to obtain the list of movies-series
function getMovies(url,tittle) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showMovies(data, tittle);
    });
}

//Function to obtain Genres and use the api to call it...
function obtainGenresMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}
//Function to obtain Genres and use the api to call it...
function obtainGenresTvSeries(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

//Function to print movies-series into the web page
function showMovies(value, tittle) {
    value = value.results;
    createRow(tittle);
    value.forEach(element => {
        createImg(tittle,element.poster_path);
    });
}

//Function to create the distinct sections tittle and containers of each section (popular, tendring, animes...)
function createRow(tittle) {
    const createH1 = document.createElement('h1');
    createH1.innerText = tittle;
    createH1.className = 'text-white';
    const createRow = document.createElement('div');
    const createImgContainer = document.createElement('div');
    createImgContainer.className = 'col';
    createImgContainer.id = tittle;
    createRow.className = 'row';
    //Introducing the elements into de global container
    container.appendChild(createH1);
    container.appendChild(createRow);
    createRow.appendChild(createImgContainer);
}

//Function to introduce the elements img elements into the sections
function createImg(tittle,imgRoute){
    const createImg = document.createElement('img');
    createImg.src = 'https://image.tmdb.org/t/p/w500'+imgRoute;
    createImg.alt = 'IMG';
    createImg.style.width = '10%';
    //Introducing the img into the section container
    document.getElementById(tittle).appendChild(createImg);
}