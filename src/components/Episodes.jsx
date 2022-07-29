import { useParams } from "react-router-dom"
import { getEpisode } from "../utils/getShow"
import { useEffect, useState } from "react"
import Loading from "./Loading"

const Episodes = () => {
  const param = useParams()
  const [ consulta, setConsul ] = useState()

  const getData = async () => {
    try {
      const { data } = await getEpisode(param.id)
      setConsul(data)
      console.log(data)
    }
    catch (error){
      //console.log('ocurrio un error',error.response.status)
      setConsul(error.response.status)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="d-flex flex-wrap justify-content-center">
       { consulta == null ? <Loading/> :
       consulta.map(item => (
        <div key={item.id} className="card p-0 m-1" style={{width: '16rem'}}>
        <img src={ item.image?.medium || noimg } className="card-img-top" alt={ item.name } /> 
        <div className="card-header">
          <h5 className="card-title" style={{textTransform:'uppercase'}}>
            <b> { item.name } </b>
          </h5>
        </div>
        <div className='card-body'>
          <p><b>Runtime: </b> {item.runtime}</p>
          <p><b>Season: </b> {item.season} </p>
          <p><b>Air date: </b>{item.airdate}</p>
          <p style={{textAlign: 'left', fontSize:'0.6rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', width:'10rem' }}><b>See more: </b>
          <a href={item.url} target="_blank"> {item.url} </a> </p>
        </div>
      </div>
       ))
       } 
    </div>
  )
}

export default Episodes