import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";


const Card = ({ dentist }) => {
  const {id, name, username} = dentist
  const {state, dispatch} = useGlobalContext()

  const addFavorite = () =>{
    if(!state.favorites.find(fav => fav.id === id)){
      dispatch({type: "addFavs", payload: dentist})
      alert(`Se ha agregado el dentista ${name} a favoritos.`)
    } else{
      dispatch({type: "deteleFavs", payload: dentist})
      alert(`Se ha eliminado el dentista ${name} de favoritos.`)
    }
  }

  return (
    <div className="card">

        <Link to={"/dentist/" + id}>
          <img src="./images/doctor.jpg" alt="IMG-Doctor" />
          <h3>{name}</h3>
          <p>{username}</p>
        </Link>
        <button onClick={addFavorite} className="fav-button">⭐</button>
    </div>
  );
};

export default Card;
