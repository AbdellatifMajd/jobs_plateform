import React from "react";

export default function Searchbar() {
  return (
    <div className="searchBar">
      <div className="content">
        <p>Le moyen le plus simple de trouver un emploi</p> 
        <div className="box">  
          <input type="text" placeholder="Entrez un mot-clé" /> 
          <button>Rechercher</button> 
        </div>
      </div>
    </div>
  );
}
