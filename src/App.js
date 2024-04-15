import React from 'react';
import './style/App.css';
import Header from './components/header';
import SearchBar from './components/searchBar' ;
import Footer from './components/footer';
import Section from './components/section';

function App() {
  return (
      <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

          < Header/>
          <SearchBar/>
          <Section/>
          <Footer/>
      </>
  );
}

export default App;
