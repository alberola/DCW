
getMovies('https://api.themoviedb.org/3/movie/popular?api_key=dda4633aacd800647ce023600f1aae38&language=es-ES&page=1');

function getMovies(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showMovies(data);
    });
}

function showMovies(value) {
    value = value.results;
    value.forEach(element => {
        document.getElementById('movies').innerHTML += "<div class='card col-4 my-3'> "+
            "<img src='https://image.tmdb.org/t/p/w500"+element.poster_path+"' class='card-img-top rounded w-100' alt='...'>"+
            "<div class='card-body'>"+
            "<h5 class='card-title'>"+element.original_title+"</h5>"+
            "<p class='card-text'>"+element.overview+"</p>"+
            "<a href='#' class='btn btn-primary'>Go somewhere</a>"+
                "</div>"
            "</div>";
    });
}