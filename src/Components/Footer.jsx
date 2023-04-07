import React from 'react'
import {useNavigate } from 'react-router-dom'
import { useGlobalContext } from './utils/global.context'

const Footer = () => {
  const navigate = useNavigate()
  const {state} = useGlobalContext()

  return (
    <footer className={state.thema}>
      <button className='go-back' onClick={() => navigate(-1)}>GO BACK</button>
      <div className='info-footer'>
        <div className = "dh-logo">
          <p>Powered by</p>
          {state.thema === "light"
          ? <img src="./images/DH.png" alt='DH-logo' />
          : <img src="./DH.ico" alt='DH-logo' />
          }
        </div>
        <div className = "social-media">
            <img className="logos" src="./images/ico-facebook.png" alt='facebook' />
            <img className="logos" src="./images/ico-tiktok.png" alt='tiktok' />
            <img className="logos" src="./images/ico-instagram.png" alt='instagram' />
            <img className="logos" src="./images/ico-whatsapp.png" alt='whatsapp' />
        </div>
      </div>
      
        
    </footer>
  )
}

export default Footer
