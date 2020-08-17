import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

//component에 state가 필요없으면 class가 아닌 function을 써도 된다.

function Movie({id,year,title,summary,poster,genres}){
    return <div className="movie">
         <img src={poster} alt={title} title={title}/>
        <div className="movie_data">
            <h3 className="movie_title" >{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary.slice(0,240)}...</p>
            <ul className="movie_genres">
                {genres.map((genre,index)=>
                <li className="genres_genre" key={index}>{genre}</li>)}</ul>
        </div>
        {/*map 함수는 item과 item number를 반환해준다. (map을 쓸 때 li에는 key값이 존재해야한다.)*/}
    </div>;
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;