import axios from 'axios'

export const getShow = async (query) => {
    return await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
  }
export const getEpisode = async (id) => {
    return await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)
  }