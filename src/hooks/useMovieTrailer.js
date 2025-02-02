import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch();

    //fetch the trailer video and update the store with trailer
    const getMovieVideos = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_OPTIONS);
        const json = await data?.json();

        //extract - all trailers
        const allTrailers = json?.results?.filter((v) => v?.type === "Trailer");
        
        //trailer present -> first trailer else first teaser
        const trailer = allTrailers?.length ? allTrailers[0] : json?.results?.filter((v) => v.type === "Teaser")[0];
        
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(()=>{
        getMovieVideos();
    },[]);
};

export default useMovieTrailer;