let search = document.getElementById('search');
let movie = document.getElementById('movie');
let title = document.getElementById('title');

search.addEventListener('click', function() {
    let movieTitle = title.value.trim();
    if (movieTitle !== '') {
        fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=fbf67667`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    let imdbID = data.imdbID;
                    let embedURL = `https://vidsrc.to/embed/movie/${imdbID}`;
                    movie.innerHTML = `<iframe class="box" src="${embedURL}" frameborder="0" allowfullscreen></iframe>`;
                } else {
                    movie.innerHTML = `<p>${data.Error}</p>`;
                }
            })
            .catch(error => {
                console.error('Error fetching movie details:', error);
                movie.innerHTML = '<p>Error fetching movie details.</p>';
            });
    } else {
        movie.innerHTML = '<p>Please enter a movie title.</p>';
    }
});
