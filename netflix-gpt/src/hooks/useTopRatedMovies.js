import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

//Hook is just a js function.
//This code is just fetching the data from tmdb and stroing it in redux store movieSlice
const useTopRatedMovies = () => {
  //Fetch data from tmdb
  const dispatch = useDispatch()
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)
    //above code gives us the promise. convert data stream promise into readable json.
    const json = await data.json()
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    getTopRatedMovies()
  }, [])


}

export default useTopRatedMovies