import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import requests from "../requests";
import Row from "../Row";

function Homescreen() {
  return( 
  <div className="homeScreen">
    <Nav />
    <Banner />
    <Row title="NETFLIX  ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLarge/>
    <Row title="Trending Movies" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
    );
}

export default Homescreen;