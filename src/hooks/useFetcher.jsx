import { useEffect, useState } from 'react'
import { getShow } from '../utils/getShow'

const useFetcher = (query = 'stranger') => {
  const [dataState, setDataState] = useState([])
  //const [loading, setLoading] = useState(true)

  const getData = async () => {
    try {
      const { data } = await getShow(query)
      setDataState(data)
    }
    catch (error){
      //console.log('ocurrio un error',error.response.status)
      setDataState(error.response.status)
    }
  }
  useEffect(() => {
    getData()
  }, [query])

  return { dataState }
}

export default useFetcher