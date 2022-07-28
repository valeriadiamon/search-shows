import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import ShowCards from './ShowCards'

const Home = () => {
  const inpShow = useRef(null)
  const [ consulta, setConsul ] = useState(null)

  const getShow = async (query='stranger') => {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getShow()
        setConsul(data)
        console.log(data)
      }
      catch (error){
        console.log('ocurrio un error',error.response.status)
        setConsul(error.response.status)
      }
    }
    getData()
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await getShow(inpShow.current.value)
    setConsul(data)
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center">
      <div className="input-group m-3" style={{width:'25rem'}}>
        <input ref={inpShow} type="text" className="form-control ps-3" placeholder="Show name"/>
        <button className="btn btn-outline-secondary" style={{borderRadius:"0.5rem"}} type="Submit" >Search</button>
      </div>
      </div>
        {consulta == null ? 'no hay datos' : <ShowCards data={ consulta }/> }
      </form>
  )
}
export default Home