import { useVideoLoader } from "../home/useVideoLoader";
import { Link } from "react-router-dom";
import VideoPreview from "../home/VideoPreview";
export default function Home() {
  const [videos, loading, error] = useVideoLoader();

  if (error)
    return (
      <div className="error-shelf">
        <p>Error with server</p>
      </div>
    );
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
