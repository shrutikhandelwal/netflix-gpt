import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"

//Hook is just a js function.
//This code is just fetching the data from tmdb and stroing it in redux store movieSlice
const useNowplayingMovies = () => {
  //Fetch data from tmdb
  const dispatch = useDispatch()
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
    //above code gives us the promise. convert data stream promise into readable json.
    const json = await data.json()
    console.log(json)
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(() => {
    getNowPlayingMovies()
  }, [])


}

export default useNowplayingMovies