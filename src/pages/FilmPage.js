import React, {useState, useEffect} from 'react';
import Torrent from "../components/Torrent";



const FilmPage = () => {

    const initialFilm = {
        title: '',
        category: '',
        genres: [],
        description: '',
        poster: '',
        year: 0,
        country: '',
        directors: '',
        actors: '',
        torrent_id: '',
    }

    const [film, setFilm] = useState(initialFilm)

    useEffect(() => {
        getFilmInfo()
    }, [])

    const getFilmInfo = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/v1/movie/6')
        const data = await response.json()
        console.log('DATA:', data)
        setFilm(data)
    }

    return (
        <div>
            <h1>{film.title}</h1>
            <div>Год: {film.year}</div>
            <div>Жанры: {film.genres[0]}, {film.genres[1]}</div>
            <div>Страна: {film.country}</div>
            <div>Режиссёр: {film.directors}</div>
            <div>Актёры: {film.actors}</div>
            <p>{film.description}</p>
            <p>{film.torrent_id}</p>
            <Torrent test = {film.torrent_id}/>
        </div>
    );

}



export default FilmPage;