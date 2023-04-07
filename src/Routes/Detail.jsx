import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'


const Detail = () => {
  const {state, getDentist} = useGlobalContext()
  const params = useParams()
  
  useEffect(() => {
    getDentist(params.id)
  }, [params.id])
 

  return (
    <div className={"detail "+(state.thema)}>
     <h1>Detail Dentist id </h1>
    {state.dentist
      ? 
          <table border="1" className="line_title" >
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{state.dentist?.name}</td>
              <td>{state.dentist?.username}</td>
              <td>{state.dentist?.email}</td>
              <td>{state.dentist?.phone}</td>
              <td>{state.dentist?.website}</td>
            </tr>
          </tbody>
          </table>
        
      : "Cargando..."
    }
  </div>
  )
}

export default Detail