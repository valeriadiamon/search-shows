import { useParams } from "react-router-dom"

const Episodes = () => {
  const param = useParams()
  console.log(param.id)
  return (
    <div>
       <h1>Episodes {param.id} </h1> 
    </div>
  )
}

export default Episodes