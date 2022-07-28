import { useState, useRef } from 'react'
import ShowCards from './ShowCards'
import Loading from './Loading'
import useFetcher from '../hooks/useFetcher'

const Home = () => {
  const inpShow = useRef(null)
  const [query, setQuery] = useState('stranger')
  const { dataState: consulta } = useFetcher(query)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setQuery(inpShow.current.value)
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
        {consulta == null ? <Loading/> : <ShowCards data={ consulta }/> }
      </form>
  )
}
export default Home