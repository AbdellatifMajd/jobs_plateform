import React from 'react';
import './style/App.css';
import Header from './components/header';
import SearchBar from './components/searchBar' ;
import Footer from './components/footer';

function App() {
  return (
      <>
          < Header/>
          <SearchBar/>
          <Footer/>
      </>
  );
}

export default App;
