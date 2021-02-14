import data from "./data.js";
import {searchMovieByTitle, makeBgActive} from "./helpers.js";

class MoviesApp {
    constructor(options) {
        const { root, searchInput, searchForm, yearHandler, yearSubmitter, genreSubmitter } = options;
        this.$tableEl = document.getElementById(root);
        this.$tbodyEl = this.$tableEl.querySelector("tbody");
        this.$yearEl = document.querySelector(".year__container");
        this.$genreEl = document.querySelector(".genre__container");

        this.$searchInput = document.getElementById(searchInput);
        this.$searchForm   = document.getElementById(searchForm);
        this.yearHandler = yearHandler;
        this.$yearSubmitter = document.getElementById(yearSubmitter);
        this.$genreSubmitter = document.getElementById(genreSubmitter);
    }

    createMovieEl(movie){
        const {image, title, genre, year,id} = movie;
        return `<tr data-id="${id}"><td><img src="${image}"></td><td>${title}</td><td>${genre}</td><td>${year}</td></tr>`
    }

    createFilterYearEl(movie) {
        const { image, title, genre, year, id } = movie;
        return `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="year" id="year${id}" value="${year}">
            <label class="form-check-label" for="year${id}">
                ${year}
            </label>
        </div>
        `
    }

    createFilterGenreEl(movie, length) {
        //const { genre, length } = movie;
        console.log("movie=>", movie);

        return `
        <div class="form-check position-relative">
            <input class="form-check-input" type="checkbox" value="${movie}" id="genre${movie}" />
            <label class="form-check-label" for="genre${movie}">
                ${movie}
            </label>
            <label class="form-check-label position-absolute end-0" for="genre${movie}">
                ${length}
            </label>
        </div>
        `


    }
    fillYear() {
        const moviesArr = data.sort((a, b) => {
            return b.year - a.year;
        }).map((movie) => {
            return this.createFilterYearEl(movie)
        }).join("");
        console.log("moviesArr=>", moviesArr)
        this.$yearEl.innerHTML = moviesArr;
    }

    groupBy(key) {
        return function group(array) {
            return array.reduce((acc, obj) => {
                const proporty = obj[key];
                acc[proporty] = acc[proporty] || [];
                acc[proporty].push(obj);
                return acc;
            }, {});
        }
    }
    groupBy2(array, groupBy) {
        return array.reduce((acc, curr, index, array) => {
            var idx = curr[groupBy];
            if (!acc[idx]) {
                acc[idx] = array.filter(item => item[groupBy] === idx)
            }
            return acc;

        }, {})
    }

    fillGenre() {
        const _tmpData = [];
        const groupByGenre = this.groupBy("genre");
        _tmpData.push(groupByGenre(data))
        console.log("groupByGenre(data)=>", groupByGenre(data))

        const grouped = this.groupBy2(data, 'genre');

        console.log("grouped=>", grouped);

        /**
         * const _tmpData = [];
        const moviesArr = data.map((movie) => {
            _tmpData.push(movie.genre)
        })
        const uniqueGenre = [...new Set(_tmpData)];
        uniqueGenre.map((genre) => this.$genreEl.innerHTML = this.createFilterGenreEl(genre))
         */
        /*
        const moviesArr = _tmpData.map((movie) => {
            console.log("---", movie)
            return this.createFilterGenreEl(movie)
        }).join("");
        */

        /*
        const moviesArr = data.reduce((acc, obj) => {
            const proporty = obj['genre'];
            acc[proporty] = acc[proporty] || [];
            acc[proporty].push(obj);
            console.log("acc[proporty]=>", acc[proporty])
            return acc[proporty] + this.createFilterGenreEl(obj);
        }, {});
        this.$genreEl.innerHTML = moviesArr;
        */
        const _tmpObj = groupByGenre(data)
        const moviesArr = Object.keys(_tmpObj).map((movie) => {
            return this.createFilterGenreEl(movie, _tmpObj[movie].length)
        }).join("");

        // .forEach(element => {
        //     console.log("element=>", _tmpObj[element].length)
        // });
        this.$genreEl.innerHTML = moviesArr;
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

    reset(){
        this.$tbodyEl.querySelectorAll("tr").forEach((item) => {
            item.style.background = "transparent";
        })
    }


    handleSearch(){
        this.$searchForm.addEventListener("submit", (event) => {
            event.preventDefault();
            this.reset();
            const searchValue = this.$searchInput.value;
            const matchedMovies = data.filter((movie) => {
                return searchMovieByTitle(movie, searchValue);
            }).forEach(makeBgActive)

        });
    }

    handleYearFilter(){
        this.$yearSubmitter.addEventListener("click", () => {
            this.reset();
            const selectedYear = document.querySelector(`input[name='${this.yearHandler}']:checked`).value
            const matchedMovies = data.filter((movie) => {
                return movie.year === selectedYear;
            }).forEach(makeBgActive)
        });
    }

    handleGenreFilter() {
        this.$genreSubmitter.addEventListener("click", () => {
            this.reset();
            const selectedGenres = document.querySelectorAll(`input[type='checkbox']:checked`)
            selectedGenres.forEach((item) => {
                const matchedMovies = data.filter((movie) => {
                    return movie.genre === item.value;
                }).forEach(makeBgActive)
            })

        });
    }

    init(){
        this.fillTable();
        this.fillYear();
        this.fillGenre();
        this.handleSearch();
        this.handleYearFilter();
        this.handleGenreFilter();
    }
}

let myMoviesApp = new MoviesApp({
    root: "movies-table",
    searchInput: "searchInput",
    searchForm: "searchForm",
    yearHandler: "year",
    yearSubmitter: "yearSubmitter",
    genreSubmitter: 'genreSubmitter'
});

myMoviesApp.init();
