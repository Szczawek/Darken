export default function VideoWindow() {
  return (
    <div className="vid-win">
      <video controls>
        <source src={`${process.env.VITE_URL}/video`} />
      </video>
    </div>
  );
}
