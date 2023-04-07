import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Components/utils/global.context'


const Home = () => {
  const {state} = useGlobalContext()
  const dentists = state.data

  return (
    <main className={"main " + (state.thema)} >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.length > 0 
        ? dentists.map((d) => <Card key = {d.id}  dentist={d}/>) 
        : "Cargando..."}
      </div>
    </main>
  )
}

export default Home