import React from 'react';
/* import {Link, Route, Switch} from 'react-router-dom';
import image from '../assets/images/logo-DH.png'; */
import ContentWrapper from './ContentWrapper';
/* import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import NotFound from './NotFound'; */
import SideBar from './SideBar';

function App() {

  

    
  return (
    <React.Fragment>
      	<div id="wrapper">
        <SideBar />
        <ContentWrapper />
        </div>
    </React.Fragment>
  );
}

export default App;
