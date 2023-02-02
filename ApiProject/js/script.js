//Var to obtain the global container
var container = document.querySelector('#globalContainer');


//Calling the api to obtain the values
obtainGenresMovies('https://api.themoviedb.org/3/genre/movie/list?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES');
obtainGenresTvSeries('https://api.themoviedb.org/3/genre/tv/list?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES');

getMovies('https://api.themoviedb.org/3/movie/popular?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1', 'Populares');
getMovies('https://api.themoviedb.org/3/trending/all/day?api_key=dda4633aacd800647ce023600f1aae38', 'Tendencia');
getMovies('https://api.themoviedb.org/3/discover/movie?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1&with_genres=16', 'Anime');
getMovies('https://api.themoviedb.org/3/discover/movie?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&with_genres=10402', 'Musical');
getMovies('https://api.themoviedb.org/3/discover/movie?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&with_genres=27', 'Terror');
getMovies('https://api.themoviedb.org/3/movie/upcoming?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1', 'Próximas Películas');
getMovies('https://api.themoviedb.org/3/discover/movie?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&with_genres=10749', 'Romance');

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
    value.map(element => {
        createImg(tittle,element.poster_path, element.id);
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
    createRow.className = 'row ';
    //Introducing the elements into de global container
    container.appendChild(createH1);
    container.appendChild(createRow);
    createRow.appendChild(createImgContainer);
}

//Function to introduce the elements img elements into the sections
function createImg(tittle,imgRoute,imgId){
    //const createDivSlide = document.createElement('div');
    //createDivSlide.className = 'swiper-slide';
    const createImg = document.createElement('img');
    createImg.src = 'https://image.tmdb.org/t/p/w500'+imgRoute;
    createImg.alt = 'IMG';
    //createImg.setAttribute('data-aos', 'zoom-in');
    //createImg.setAttribute('data-aos-duration','3000');
    createImg.setAttribute('data-bs-toggle', 'modal');
    createImg.setAttribute('data-bs-target', '#myModal');
    createImg.className = 'imgEvent p-1';
    createImg.id = imgId;
    createImg.setAttribute('width','10%');
    createImg.setAttribute('onclick', 'modalItems(this)');
    //Introducing the img into the section container
    document.getElementById(tittle).appendChild(createImg);
    //createDivSlide.appendChild(createImg);
}



//Function to add modals interface calling the api for a specific film...
function modalItems(movieId) {
    let value = movieId.id;

    //Calling the api for the requested film
    fetch('https://api.themoviedb.org/3/movie/'+value+'?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createModal();
        updateModalContent(data.title,data.overview,data.vote_average);
    });
    //Calling the api for the requested video
    fetch('https://api.themoviedb.org/3/movie/'+value+'/videos?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES')
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        //Checking that is an trailer for the movie
        if (data.results.length > 0) {
            //If we have a trailer we are going to take the last video (it´s usually the oficial trailer)
            let long = data.results.length -1 ;
            //Setting the iframe route
            updateIframeSrc(data.results[long].key);

        } else {
            //If we dont search a trailer we are going to put a generic video iframe
            updateIframeSrc('2YBtspm8j8M');
            //WE WANT TO IMPLEMENET A CODE HERE TO EDIT THE MODAL STRUCTURE WHEN WE DONT FOUND A TRAILER-VIDEO

        }
    });
}

function createModal(){
    //Creating the modal structure
    const modal = document.createElement('div');
    const modalDialog = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalContentHeader = document.createElement('div');
    const modalContentBody = document.createElement('div');
    const buttonHeader = document.createElement('button');
    const iframeBody = document.createElement('iframe');
    const h1Body = document.createElement('h1');
    const pBody = document.createElement('p');
    const h4Body = document.createElement('h4');

    //Setting Parent modal 
    modal.className = 'modal fade modal-xl';
    modal.id = 'myModal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby','exampleModalLabel');
    modal.setAttribute('aria-hidden','true');

    document.querySelector('#bodyContent').appendChild(modal);

    //Setting modalDialog
    modalDialog.className = 'modal-dialog';
    modal.appendChild(modalDialog);

    //Setting modalContent
    modalContent.className = 'modal-content';
    modalDialog.appendChild(modalContent);

    //Setting modalContentHeader
    modalContentHeader.className = 'modal-header';
    modalContent.appendChild(modalContentHeader);
    buttonHeader.className = 'btn-close';
    buttonHeader.setAttribute('data-bs-dismiss', 'modal');
    buttonHeader.setAttribute('aria-label', 'Close');
    buttonHeader.setAttribute('onclick', 'deleteModal');
    modalContentHeader.appendChild(buttonHeader);

    //Setting modalContentBody
    modalContentBody.className = 'modal-body';
    modalContent.appendChild(modalContentBody);
    //modalContentBody Iframe Settings
    iframeBody.width = '100%';
    iframeBody.height = '500';
    iframeBody.id = 'iframeModal';
    //iframe.src = 'https://www.youtube.com/embed/'+key;
    iframeBody.title = 'YouTube video player';
    iframeBody.src = '';
    iframeBody.setAttribute('frameborder', '0');
    iframeBody.setAttribute('allow', 'accelerometer', 'autoplay', 'clipboard-write', 'encrypted-media', 'gyroscope', 'picture-in-picture', 'web-share');
    iframeBody.setAttribute('allowfullscreen','1');
    modalContentBody.appendChild(iframeBody);
    //h1 p h4 modalContentBody settings
    h1Body.id = 'modalTitle';
    modalContentBody.appendChild(h1Body);
    pBody.id = 'modalDescription';
    modalContentBody.appendChild(pBody);
    h4Body.id = 'modalValoration';
    modalContentBody.appendChild(h4Body);

    //Open the modal parent when we create it.
    //modal.setAttribute('aria-modal', 'true');
    //modal.setAttribute('role', 'dialog');
    //modal.style.display = 'block';
    //modal.classList.add = 'show';
}

//Function to update modal Iframe SRC
function updateIframeSrc(key) {
    let idIframe = document.querySelector('#iframeModal');
    idIframe.src = 'https://www.youtube.com/embed/'+key;
}
//Function to update modal content
function updateModalContent(title,description,valoration){
    document.querySelector('#modalTitle').innerHTML = title;
    document.querySelector('#modalDescription').innerHTML = description;
    document.querySelector('#modalValoration').innerHTML = 'Valoración: '+valoration.toFixed(2);
}

//Function to delete modal
function deleteModal(){

}