import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";




const Catalog = () => {

    const initialList = [
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},
        {title: '', category: 0, poster: ''},

    ]

    const [filmList, setFilmList] = useState(initialList)

    useEffect(() => {
        getFilms()
    }, [])

    const getFilms = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/v1/movie/')
        const data = await response.json()
        console.log('DATA:', data)
        setFilmList(data)
    }
    console.log(filmList, 'fdgdfgdg')


    return (
        <div>
            <h1>Каталооог</h1>
            <div>
                {
                    filmList.map((item, index) => (
                        <div key = {index}>
                            <h3>
                                <Link to="/film">{item.title}</Link></h3>
                            <div>Категория: {item.category}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};


export default Catalog;