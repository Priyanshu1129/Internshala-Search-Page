import { useState, useEffect } from "react";

export default function useFetchInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://internshala.com/hiring/search")
      .then((res) => res.json())
      .then((data) => {
        setInternships(data.internships_meta || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { internships, loading };
}
