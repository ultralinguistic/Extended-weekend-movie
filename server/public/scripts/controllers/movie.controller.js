app.controller('MovieController', function(ViewService, GenreService){
    let self = this;
    console.log('Movie controller');
    self.movies = [];
    self.genreList = [];
    self.getAllMovies = function() {
    ViewService.getMovies().then(function () {
        self.movies = ViewService.allMovies;
        console.log('got movies', self.movies);
    });
    };
    
    self.deleteMovie = function(movie) {
        console.log('delete');
        console.log(movie);
        ViewService.deleteMovies(movie).then(function (){
            self.getAllMovies();
        });
        
    };
});
