
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
        <div className="flex overflow-x-scroll"> 
          <div className="flex"> 
            {movies?.map((movie) => {
              return(
                <MovieCard  key={movie.id} posterPath={movie.poster_path} />
              )
            })}
            
          </div>
        </div>
       
    </div>
  )
}

export default MovieList
/* 

https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

id
: 
939243
original_language
: 
"en"
original_title
: 
"Sonic the Hedgehog 3"
overview
: 
"Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet."
popularity
: 
4984.588
poster_path
: 
"/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg"
release_date
: 
"2024-12-19"
title
: 
"Sonic the Hedgehog 3"
video
: 
false
vote_average
: 
7.686
vote_count
: 
829
*/
