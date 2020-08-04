import React , {useState, useEffect} from 'react'
import axios from 'axios';
import './banner.css';

function Banner() {
    const API_KEY="f5a522e5f24053ca2c05317f165103e9";

    const [movie, setMovie] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request =await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`);
           setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length-1)
            ]
           );
           return request
        }
        fetchData();
        
    },[])
   

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) : "..."+str;
    }
    return (
       <header className="banner"
       style={{
           baackgroundSize:"cover",
           backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
           backgrooundPosition:"center center",
       }}
       >
           <div className="banner_contents">
                <h1 className="banner_title">{movie.title ||movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">Mylist</button>

                </div>
                <h2 class="banner-description">{truncate(movie?.overview ,150)}</h2>
           </div>
           <div className="banner-fadebottom"></div>
       </header>
    )
}

export default Banner
