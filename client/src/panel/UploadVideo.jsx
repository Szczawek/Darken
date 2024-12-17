import { useRef, useState } from "react";
import { uploadByServer } from "./uploadByServer";
export default function UploadVideo() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [video, setVideo] = useState();
  const fileInp = useRef(null);

  async function startUploadingVideo(e) {
    try {
      e.preventDefault();
      if (!video || successMsg) return;
      setLoading(true);
      await uploadByServer(video);
      reset();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setVideo();
    fileInp.current.value = "";
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 4000);
  }

  if (error)
    return (
      <div className="error-msg">
        <p>Connection is broken!</p>
      </div>
    );

  return (
    <div className="upload-video">
      {successMsg ? <p className="success-msg">Video has been added!</p> : null}
      <form onSubmit={startUploadingVideo}>
        <p className="sub-title">Choose your video</p>
        <label className="choose-video" htmlFor="up-vid">
          <input
            ref={fileInp}
            onChange={(e) => setVideo(e.target.files[0])}
            type="file"
            accept="video/mp4"
            id="up-vid"
          />
        </label>
        <button
          disabled={loading ? true : false}
          type="submit"
          className="upload-btn">
          {loading ? "Loading ... " : "Upload"}
        </button>
      </form>
    </div>
  );
}
