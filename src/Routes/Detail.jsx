import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'


const Detail = () => {
  const {state, getDentist} = useGlobalContext()
  const dentist = state.dentist
  const params = useParams()
  
  useEffect(() => {
    getDentist(params.id)
  }, [params.id])
 

  return (
    <div className={"detail "+(state.thema)}>
     <h1>Detail Dentist id </h1>
    {dentist
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
              <td>{dentist?.name}</td>
              <td>{dentist?.username}</td>
              <td>{dentist?.email}</td>
              <td>{dentist?.phone}</td>
              <td>{dentist?.website}</td>
            </tr>
          </tbody>
          </table>
        
      : "Cargando..."
    }
  </div>
  )
}

export default Detail