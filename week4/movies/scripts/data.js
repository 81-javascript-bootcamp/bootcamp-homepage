let moviesData = [
    {
        "title": "The Shawshank Redemption",
        "year": "1994",
        "genre": "Crime",
        "image": "https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "id": 0
    },
    {
        "title": "The Godfather",
        "year": "1972",
        "genre": "Crime",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 1
    },
    {
        "title": "The Godfather: Part II",
        "year": "1974",
        "genre": "Crime",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 2
    },
    {
        "title": "The Dark Knight",
        "year": "2008",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "id": 3
    },
    {
        "title": "12 Angry Men",
        "year": "1957",
        "genre": "Crime",
        "image": "https://ia.media-imdb.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "id": 4
    },
    {
        "title": "Schindler's List",
        "year": "1993",
        "genre": "Biography",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 5
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "year": "2003",
        "genre": "Adventure",
        "image": "https://ia.media-imdb.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
        "id": 6
    },
    {
        "title": "Pulp Fiction",
        "year": "1994",
        "genre": "Crime",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
        "id": 7
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "year": "1966",
        "genre": "Western",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
        "id": 8
    },
    {
        "title": "Fight Club",
        "year": "1999",
        "genre": "Drama",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 9
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": "2001",
        "genre": "Adventure",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "id": 10
    },
    {
        "title": "Forrest Gump",
        "year": "1994",
        "genre": "Drama",
        "image": "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "id": 11
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": "1980",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 12
    },
    {
        "title": "Inception",
        "year": "2010",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "id": 13
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "year": "2002",
        "genre": "Adventure",
        "image": "https://ia.media-imdb.com/images/M/MV5BMDY0NmI4ZjctN2VhZS00YzExLTkyZGItMTJhOTU5NTg4MDU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 14
    },
    {
        "title": "One Flew Over the Cuckoo's Nest",
        "year": "1975",
        "genre": "Drama",
        "image": "https://ia.media-imdb.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "id": 15
    },
    {
        "title": "Goodfellas",
        "year": "1990",
        "genre": "Biography",
        "image": "https://ia.media-imdb.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        "id": 16
    },
    {
        "title": "The Matrix",
        "year": "1999",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 17
    },
    {
        "title": "Seven Samurai",
        "year": "1954",
        "genre": "Adventure",
        "image": "https://ia.media-imdb.com/images/M/MV5BMTc5MDY1MjU5MF5BMl5BanBnXkFtZTgwNDM2OTE4MzE@._V1_SX300.jpg",
        "id": 18
    },
    {
        "title": "Star Wars: Episode IV - A New Hope",
        "year": "1977",
        "genre": "Action",
        "image": "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 19
    }
]


export default moviesData;