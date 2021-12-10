import React from 'react'
import { useState } from 'react'
import leftImg from './asset/wLeft.png';
import rightImg from './asset/wRight.png';
import './PageNavButton.css';

const PageNavButton = ({ pageN, lastPageEvent, nextPageEvent,getMovieRequest }) => {
 
    return (
        <>
            <div className="divCss">
                <img src={leftImg} onClick={()=>{lastPageEvent();getMovieRequest()}}></img>
                <p>page {pageN}/Total 500 of 10000 results</p>
                <img src={rightImg} onClick={()=>{nextPageEvent();getMovieRequest()}}></img>
            </div>
        </>
    )
}

export default PageNavButton
