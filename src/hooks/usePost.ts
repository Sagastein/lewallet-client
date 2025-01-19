// hooks/usePost.js
import { useState } from "react";
import axios from "axios";

const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (postData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "insomnia/8.4.5",
        },
      });
      setData(response.data);
      return response.data; // Return the data for further use
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, postData };
};

export default usePost;
