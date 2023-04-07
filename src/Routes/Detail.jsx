import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {state} = useGlobalContext()
  const [dentistSel, setDentistSel] = useState({}) 
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url)
      let data = await response.json()
      setDentistSel(data)
    } 
    fetchData()
  }, [])
 

  return (
    <div className={"detail "+(state.thema)}>
     <h1>Detail Dentist id </h1>
    {dentistSel
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
              <td>{dentistSel?.name}</td>
              <td>{dentistSel?.username}</td>
              <td>{dentistSel?.email}</td>
              <td>{dentistSel?.phone}</td>
              <td>{dentistSel?.website}</td>
            </tr>
          </tbody>
          </table>
        
      : "Cargando..."
    }
  </div>
  )
}

export default Detail