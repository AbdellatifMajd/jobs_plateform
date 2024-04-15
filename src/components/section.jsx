import React from 'react'; 

export default function Section() { 
  return (
    <div className='section'>  
          <div className="card">  
          <img src="imgs/1.jpg" alt="" /> 
          <img src="imgs/4.jpg" alt="" /> 

      </div>




      <div className="signin-container">  
        <div className="signin-header">   
          <h2>se connecter</h2> 
        </div>

        <div className="signin-options">   
          <button className="btn btn-google">  
            <i className="fab fa-google"></i>  
            Continuer avec Google  
          </button>

          <button className="btn btn-facebook"> {/* Bouton de connexion Facebook */}
            <i className="fab fa-facebook"></i>  {/* Icône Facebook */}
            Continuer avec Facebook  {/* Texte du bouton */}
          </button>

          <div className="or-divider">  {/* Séparateur "ou" */}
            <span>ou</span>  {/* Texte du séparateur */}
          </div>

          <form className="email-form"> 
            <input type="email" placeholder="Entrer l'adresse email" className="email-input" /> 
            <button type="submit" className="btn btn-email">Continuer avec email</button> 
          </form>
        </div>

        <div className="terms-and-privacy">  
          <p>
            En continuant, vous acceptez nos <a href="#">Conditions d'utilisation</a> et
            <a href="#"> Politique de confidentialité</a>.
          </p>
        </div>
      </div>



      <div className="card">  
          <img src="imgs/2.jpg" alt="" /> 
          <img src="imgs/3.jpg" alt="" /> 

      </div>



    </div>
  );
}
