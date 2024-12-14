import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function SearchForVideo() {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function findById() {
      try {
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    findById();
  }, [params]);

  return <div className="search-window"></div>;
}
