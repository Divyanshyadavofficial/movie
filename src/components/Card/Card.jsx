import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({ movie }) => {
    return (
        <Link className="card__link" to={`/movie/${movie?.id}`} >
            <div className="card" >
                <img src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} className="card__image" alt="" />
                <div className="card__overlay" >
                    <div className="card__title" >
                        {movie?.title}
                    </div>
                    <div className="card__runtime" >
                        {movie?.release_date}
                        <span className="card__rating" >{movie?.vote_average} ⭐</span>
                    </div>
                    <div className="card__description" >
                        {movie?.overview.slice(0, 118)}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Card;