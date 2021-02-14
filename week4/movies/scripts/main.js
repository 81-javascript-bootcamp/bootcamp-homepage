import data from "./data.js";

class MoviesApp {
    constructor(options) {
        const {root, searchInput, searchForm} = options;
        this.$tableEl = document.getElementById(root);
        this.$tbodyEl = this.$tableEl.querySelector("tbody");

        this.$searchInput = document.getElementById(searchInput);
        this.$searchForm   = document.getElementById(searchForm);
    }

    createMovieEl(movie){
        const {image, title, genre, year,id} = movie;
        return `<tr data-id="${id}"><td><img src="${image}"></td><td>${title}</td><td>${genre}</td><td>${year}</td></tr>`
    }

    fillTable(){
        /* const moviesHTML = data.reduce((acc, cur) => {
            return acc + this.createMovieEl(cur);
        }, "");*/
        const moviesArr = data.map((movie) => {
           return this.createMovieEl(movie)
        }).join("");
        this.$tbodyEl.innerHTML = moviesArr;
    }

    handleSearch(){
        this.$searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const searchValue = this.$searchInput.value;
            const matchedMovies = data.filter((movie) => {
                return movie.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
            }).forEach((movie) => {
                document.querySelector(`tr[data-id='${movie.id}']`).style.background = "green";
            })

        });
    }

    init(){
        this.fillTable();
        this.handleSearch();
    }
}

let myMoviesApp = new MoviesApp({
    root: "movies-table",
    searchInput: "searchInput",
    searchForm: "searchForm"
});

myMoviesApp.init();
