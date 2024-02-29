import { useState, useEffect } from "react";

const useFetch = (apiUrl, apiKey) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (apiUrl) {
      fetch(apiUrl + apiKey)
        .then((data) => data.json())
        .then((dataParsed) => setResult(dataParsed));
    }
  }, [apiUrl]);

  return [result];
};

export default useFetch;
