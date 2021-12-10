import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ReactDOM             from 'react-dom';        
import PropTypes            from 'prop-types';
import Navbar from './Components/Navbar';
import './App.css';
//Import the pages
import Home from './Components/Home';
import AllMovies from "./Components/AllMovies"
import LikedMovies from "./Components/LikedMovies"
import BlockedMovies from "./Components/BlockedMovies"
import About from "./Components/About"
import React, { useState, useEffect } from 'react';
import { render } from "@testing-library/react";
//api
let apiUrlwithOutPageNum = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d337f24fdb9ff9c98d7ae96fee43af2&page=';
const IMGPATH = "https://image.tmdb.org/t/p/w300";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=6d337f24fdb9ff9c98d7ae96fee43af2&query=";

const genresAPI = "https://api.themoviedb.org/3/genre/movie/list?api_key=6d337f24fdb9ff9c98d7ae96fee43af2&language=en-US";






function App() {

  
  const [movies, setMovies] = useState([]);
  const [likedList, setLikedList] = useState([]);
  const [blockedList, setBlockedList] = useState([]);
  const [pageN, setPageN] = useState(1);
  const [apiUrl, setApiUrl] = useState(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6d337f24fdb9ff9c98d7ae96fee43af2&page=1`);


  function lastPageEvent() {
    if (pageN > 1) { setPageN(pageN - 1) };
    // setApiUrl(apiUrlwithOutPageNum + pageN);
    console.log("點擊方法内：" + pageN);
  }

  function nextPageEvent() {
    setPageN(pageN + 1);
    // setApiUrl(apiUrlwithOutPageNum + pageN);
    console.log("點擊方法内：" + pageN);
  }

  useEffect(() => {
    setApiUrl(apiUrlwithOutPageNum + pageN)
    getMovieRequest();
  }, []);



  const getMovieRequest = async () => {
    setApiUrl(apiUrlwithOutPageNum + pageN)
    console.log("await前" + apiUrl)
    const response = await fetch(apiUrl);
    console.log('------------apiUrl-------start------------')
    console.log("await后" + apiUrl)
    console.log('------------apiUrl-------close------------')
    const responseJson = await response.json();

    if (responseJson.results) {
      console.log('--responseJson.results---:')
      setMovies(responseJson.results);
    }

    console.log('--1---')
    console.log(responseJson.results)
    // console.log('--2---') 
    // console.log(movies)
    // console.log('--2---')
  };


    console.log('觀測page：' + pageN + "以下渲染")
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    console.log("rendering...");
      return (
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/AllMovies'
                element={
                  <AllMovies
                    movies={movies}
                    IMGPATH={IMGPATH}
                    pageN={pageN}
                    lastPageEvent={lastPageEvent}
                    nextPageEvent={nextPageEvent}
                    getMovieRequest={getMovieRequest}
                  />
                }
              />
              <Route exact path='/LikedMovies' element={<LikedMovies likedList={likedList} />} />
              <Route exact path='/BlockedMovies' element={<BlockedMovies blockedList={blockedList} />} />
              <Route exact path='/About' element={<About />} />

            </Routes>
            {/* <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="page1">Page 1</Link></li>
            <li><Link to="page2">Page 2</Link></li>
            <li><Link to="page3">Page 3</Link></li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<Page1 />} />
          <Route exact path="page2" element={<Page2 />} />
          <Route exact path="page3" element={<Page3 />} />
        </Routes> */}
          </Router>
        </div>
      );
    
  
}

export default App;