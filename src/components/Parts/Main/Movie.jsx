/* eslint-disable jsx-a11y/iframe-has-title */
import "./movie.css";
import React from "react";

function Movie(props) {
    const { movie: movieId } = props;
    return (
        <div className="movie">
            <iframe
                src={`https://www.youtube.com/embed/${movieId}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default Movie;
