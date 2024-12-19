import { useVideoLoader } from "../home/useVideoLoader";
import { Link } from "react-router-dom";
import VideoPreview from "../home/VideoPreview";
import "../home/home.css"
export default function Home() {
  const [videos, loading, error] = useVideoLoader();

  if (error)
    return (  
      <div className="error-shelf">
        <p>Error with server</p>
      </div>
    );

  if(videos && !loading) return <div className="desc-home"><p>There are currently no videos on the platform. Do you want to be the first?</p></div>  
  return (  
    <div className="video-shelf">
      {loading ? (
        <p className="loading">Loading ...</p>
      ) : (
        videos.map((e, index) => {
          return (
            <Link key={index}>
              <VideoPreview />
            </Link>
          );
        })
      )}
    </div>
  );
}
