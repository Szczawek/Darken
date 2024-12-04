import { useVideoLoader } from "./useVideoLoader";
export default function OfferedVideo() {
  const [videos, loading, error] = useVideoLoader();

  if (error)
    return (
      <div className="error-shelf">
        <p>Error with server</p>
      </div>
    );
  return (
    <div className="videos-shelf-vertical">
      {loading ? <p className="loading">Loading ...</p> : null}
    </div>
  );
}
