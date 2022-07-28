//import { FaStar } from 'react-icons/fa'
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import noimg from '../assets/no-image.png'

const ShowCards = ({ data }) => {
  return (
    data.length === 0 
    ? <p className='text-center'>No se encontraron resultados</p>
    : 
    (
    <div className="d-flex flex-wrap justify-content-center">
      {data.map(item => 
      (
      <div className="card p-0 m-1" style={{width: '12rem'}}>
        <img src={ item.show.image?.medium || noimg } className="card-img-top" alt={ item.show.name } /> 
        <div className="card-header">
          <h5 className="card-title" style={{textTransform:'uppercase'}}>
            <b> { item.show.name } </b>
          </h5>
        </div>
        <div className='card-body'>
          <p><b>Average runtime: </b> {item.show.averageRuntime}</p>
          <p><b>Languaje: </b> {item.show.language} </p>
          <p><b>Started: </b>{item.show.premiered}</p>
          <p><b>Ended: </b>{item.show?.ended || "Not ended yet"}</p>
          { item.show.rating?.average == null ? '': <p><b>Rating:</b> { item.show.rating.average} </p>  }
          { item.show.genres.length == 0 ? '' : <p ><b>Gender:</b></p>}
          <ul>
          { item.show.genres.map(elem => <li>{elem}</li>) }
          </ul>
          <p style={{textAlign: 'left', fontSize:'0.6rem', textOverflow:'ellipsis', whiteSpace:'nowrap', overflow:'hidden', width:'10rem' }}><b>See more: </b>
          <a href={item.show?.url} target="_blank"> {item.show?.url} </a> </p>
          <Link to={`/episodes/${item.show.id}`}> Episodes </Link>
          {/*<Link to={`/episodes/${item.show.id}`}>Episodes</Link>*/}
          {/* <a href="#" style={{padding:'0.5rem'}} class="btn">Episodes</a> */}
        </div>
      </div>
      )
    )}
  </div>
        )
  )
}
//data.map(item => (item.show.name))

export default ShowCards