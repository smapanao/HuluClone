import React, { useEffect, useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from "react-flip-move";

function Results({ selectedOption }) {
    const [movies, setMovies] = useState([]);

    /**takes a function - dependancies. If blank, it says "run this code 
    once when the results component loads/mounts" If a dependancy such
    as "name" is put, it'll run it once when the component loads, and it'll
    also run it everytime the name changes// TL;DR runs following code
    every time te results component loads/mounts. - async function */
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [selectedOption])

    return (
        <div className="results">
            <FlipMove>
                {/*go through every movie in movie array and render out all the 
                video cards*/}
                {movies.map((movie) => (
                    <VideoCard key={movie.id} movie={movie} />
                ))}
            </FlipMove>
        </div>
    );
}

export default Results;
