import { useParams } from "react-router-dom"
import { getCast } from "../utils/getShow"
import { useEffect, useState } from "react"
import Loading from "./Loading"

const Cast = () => {
  const param = useParams()
  const [ consulta, setConsul ] = useState()

  const getData = async () => {
    try {
      const { data } = await getCast(param.id)
      setConsul(data)
      console.log(data)
    }
    catch (error){
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
        <div className="d-flex flex-row card p-0 m-1" style={{width: '18rem'}}>
            <div style={{width: '9rem'}}>
                <img src={ item.person.image?.medium || noimg } className="card-img-top" alt={ item.person.name } /> <div className='card-body'>
                    <p><b>Person: </b> {item.person.name}</p>
                    <p style={{textAlign: 'left', fontSize:'0.6rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', width:'7rem' }}><b>See more: </b>
                    <a href={item.url} target="_blank"> {item.person.url} </a> </p>
                </div>
            </div>
            <div style={{width: '9rem'}}>
                <img src={ item.character.image?.medium || noimg } className="card-img-top" alt={ item.character.name } /> 
                <div className='card-body'>
                    <p><b>Character: </b> {item.character.name}</p>
                    <p style={{textAlign: 'left', fontSize:'0.6rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', width:'7rem' }}><b>See more: </b>
                    <a href={item.url} target="_blank"> {item.character.url} </a> </p>
                </div>
            </div>
        </div>
       ))
       } 
    </div>
  )
}

export default Cast