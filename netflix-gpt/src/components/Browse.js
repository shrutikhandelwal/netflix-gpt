
import useNowplayingMovies from "../hooks/useNowPlayingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import GPTSearch from "./GPTSearch"
import { useSelector } from "react-redux"

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch)
  //Just one hook will take care of bringing nowplaying movie and put it on in the app.
  useNowplayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header />
      {
        showGPTSearch ? <GPTSearch /> : 
                                  <>
                                  <MainContainer />
                                  <SecondaryContainer />
                                  </>
      }
    </div>
  )
}

export default Browse




/* 
  MainContainer
    - VideoBackground
    - VideoTitle
  SecondaryContainer
    - MovieList * n
      -cards * n
*/