import  { useState } from 'react';

const useApiHooks = () => {
   
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async (URI) => {
    setLoading(true);
    return new Promise((resolve, reject) => {
      fetch(URI)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setData(data);        // ✅ store in hook state
          resolve(data);        // ✅ allow access in component if needed
        })
        .catch((error) => {
          setError(error);
          reject(error);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  

  return { data, error, loading, fetchData };

}
export default useApiHooks;
