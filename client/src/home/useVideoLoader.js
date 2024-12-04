import { useEffect, useRef, useState } from "react";
function useVideoLoader() {
  const [videos, setVideo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onceEffect = useRef(false);

  async function loadingVideos() {
    try {
      const options = {};
      const res = true;
      // const res = await fetch(`${process.env.VITE_URL}/`)
      //   if (!res.ok) throw res.status;
      //   const obj = await res.json();
      //   setVideo((prev) => [...prev, ...obj]);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (onceEffect.current) return;
    loadingVideos();
    return () => (onceEffect.current = true);
  }, []);

  return [videos, loading, error];
}

export { useVideoLoader };
