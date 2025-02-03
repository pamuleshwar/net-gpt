import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieID}) => {
    //get trailer from redux store
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

    //fetch the trailer & put into the store.
    useMovieTrailer(movieID);

  return (
    <div className="w-full">
        <iframe className="w-full aspect-video"  src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1&loop=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground