import React from 'react'

import PageNavButton from "./PageNavButton";


export default function AllMovies(props) {
    return (
        <>
            <h1>All Movies</h1>

            <PageNavButton 
            pageN={props.pageN} 
            lastPageEvent = {props.lastPageEvent}
            nextPageEvent = {props.nextPageEvent}
            getMovieRequest ={props.getMovieRequest}
            />
            <div className="allMovie">
                {console.log(props.movies)}
                {props.movies.map((movie, index) => (
                    <div className='image-container '>
                        <img className='imgSize' src={props.IMGPATH + movie.poster_path} alt='movie'></img>

                        <div className='overlay'>
                            <span>|Like| </span><span> |Block|</span>
                        </div>


                    </div>

                ))}

            </div>
        </>
    )
}