import VideoDisplay from "./VideoDisplay";
import OfferedVideo from "./OfferedViedeo";
export default function WatchWindow() {
  return (
    <div className="watch-window">
      <VideoDisplay />
      <OfferedVideo />
    </div>
  );
}
