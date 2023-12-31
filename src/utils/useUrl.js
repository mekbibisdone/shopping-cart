import { useEffect, useState } from "react";
export function useProductsUrl(url) {
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

export function useImageUrl(url) {
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 400) throw new Error(res.status);
        setImgSrc(res.url);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { loading, error, imgSrc };
}
