import React, { useEffect, useState, useRef } from 'react';
import './App.css'; // Import your new CSS file

const App = () => {
  const [Input, setInput] = useState('');
  const [allData, setAllData] = useState(null);
  const [popularData, setPopularData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const playerRef = useRef(null);

  const API_KEY = "2ab07db4a3ffe6cb4c6684cbfbd2598e";

  const fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
    setAllData(result);
  };

  const fetchPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const res = await fetch(url);
    const result = await res.json();
    setPopularData(result);
  };

  const handlePlay = async (id) => {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`);
      const data = await res.json();
      const trailer = data.results.find(vid => vid.type === "Trailer" && vid.site === "YouTube");
      
      if (trailer) {
        setSelectedVideo(trailer.key);
        playerRef.current?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert("Trailer not available.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchPopularMovies();
  }, []);

  const filtersearch = allData?.results?.filter((Fmovie) => {
    return Fmovie.title.toLowerCase().includes(Input.toLowerCase());
  }) || [];

  return (
    <div className='container'>
      <div className="top">
        <h1>MovieBox</h1>
        <input 
          className="search-input"
          type="text" 
          placeholder="Search for a movie..."
          value={Input} 
          onChange={(e) => setInput(e.target.value)} 
        />
      </div>

      <div ref={playerRef}>
        {selectedVideo && (
          <div className="video-theater">
            <button className="close-btn" onClick={() => setSelectedVideo(null)}>Close X</button>
            <iframe
              width="100%"
              height="500px"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Trailer"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>

      <div className="data-container">
        {!Input && (
          <>
            <h2>Trending Now</h2>
            <div className="popular-row">
              {popularData?.results?.map((Pmovie) => (
                <div className="movie-card" key={Pmovie.id} onClick={() => handlePlay(Pmovie.id)}>
                  <img src={`https://image.tmdb.org/t/p/w500${Pmovie.poster_path}`} alt={Pmovie.title} />
                  <p>{Pmovie.title}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <h2>{Input ? `Results for "${Input}"` : "Discover"}</h2>
        <div className="main-grid">
          {(Input ? filtersearch : allData?.results)?.map((movie) => (
            <div className="movie-card" key={movie.id} onClick={() => handlePlay(movie.id)}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h4>{movie.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;