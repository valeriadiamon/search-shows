const CardMovie = ({ name }) => {
    return (
      <article className='card'>
        <p> { name } </p>
      { /*  <img className='card-img-top' src={Poster} alt={Title}/>
        <div className='card-body text-dark text-center'>
          <h5 className='card-title line-clamp'>{Title}</h5>
          <p>{imdbID}</p>
          <p>{Year}</p>
          <p>{Genre}</p>
        </div>
        <BrowserRouter>
        <Routes>
          <Route path="/movie" element={<Movie/>}>
          </Route>
        </Routes>
    </BrowserRouter> */ }
      </article>
    )
  }
  
  export default CardMovie
  