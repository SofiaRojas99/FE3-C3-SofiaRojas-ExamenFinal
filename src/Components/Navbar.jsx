import React from 'react'
import { Link} from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'

const Navbar = () => {

    const {state, dispatch} = useGlobalContext()
  
    const changeThema = () =>{     
      state.thema === 'light'
      ? dispatch({type: state.thema, payload: 'dark'})
      : dispatch({type: state.thema, payload: 'light'})
    }

  return (
    <nav  className={state.thema}>
      <span>DH Odonto</span>
      <div>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <Link to='/favs'><h3>Favorites</h3></Link>

        <button onClick={changeThema} className= "btn-theme">
        {state.thema === "dark"
          ? "🔅"
          : "🌙"
        }</button>

      </div>
      
    </nav>
  )
}

export default Navbar