import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./utils/global.context";


const Card = ({ dentist }) => {
  const {id, name, username} = dentist
  const {state, dispatch} = useGlobalContext()

  const addFavorite = () =>{
    if(!state.favorites.find(fav => fav.id === id)){
      dispatch({type: "ADD_FAVS", payload: dentist})
      alert(`The dentist ${name} has been added to favorites.`)
    } else{
      dispatch({type: "DELETE_FAVS", payload: dentist})
      alert(`The dentist ${name} has been removed from favorites.`)
    }
  }

  return (
    <div className="card">
        <Link to={"/dentist/" + id}>
          <img src="./images/doctor.jpg" alt="IMG-Doctor" />
          <h4>{name}</h4>
          <p>{username}</p>
        </Link>
        <button onClick={addFavorite} className="fav-button">⭐</button>
    </div>
  );
};

export default Card;
