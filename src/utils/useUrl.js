import { useEffect, useState } from "react";
export default function useUrl(url) {
  const [json, setJson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setJson(json);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { json, loading, error };
}
