import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

//Hook is just a js function.
//This code is just fetching the data from tmdb and stroing it in redux store movieSlice
const usePopularMovies = () => {
  //Fetch data from tmdb
  const dispatch = useDispatch()
  const getPopularMovies = async () => {
    const data = await fetch(' https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS)
    //above code gives us the promise. convert data stream promise into readable json.
    const json = await data.json()
    dispatch(addPopularMovies(json.results))
  }

  useEffect(() => {
    getPopularMovies()
  }, [])


}

export default usePopularMovies