import React from "react";
import Card from "../Components/Card";
import { useGlobalContext } from '../Components/utils/global.context'


const Favs = () => {
  const {state} = useGlobalContext()
  const favorites = state.favorites

  return (
    <div className={"favs " + (state.thema)}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">

        {favorites.length > 0
        ? 
            favorites.map((d) => {
              return(
                <div key={d.id}>
                  <Card dentist ={d} />
                </div>
              )
            })  
        : "No favorites yet..."}
      </div>
    </div>
  );
};

export default Favs;
