
import useNowplayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./Header"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  //Just one hook will take care of bringing nowplaying movie and put it on in the app.
  useNowplayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      
      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            -cards * n

      
      */}
    </div>
  )
}

export default Browse