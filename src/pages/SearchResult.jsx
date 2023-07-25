// SearchResults.js
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Cart from "../components/Cart";

const SearchResults = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://edu-connect-server.vercel.app/college-details")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const [filteredColleges, setFilteredColleges] = useState([]);
  console.log(filteredColleges);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("term");
  useEffect(() => {
    if (colleges.length > 0 && searchTerm) {
      const filteredColleges = colleges?.filter((college) =>
        college?.collegeName?.toLowerCase().includes(searchTerm?.toLowerCase())
      );
      setFilteredColleges(filteredColleges);
    }
  }, [colleges, searchTerm]);

  return (
    <div className="py-20">
    <h2 className="text-3xl">Search Results for "{searchTerm}"</h2>
    {filteredColleges.length > 0 ? (
      <div className="grid grid-cols-3 gap-4">
        {filteredColleges.map((college) => (
          <Cart key={college._id} collegeDetails={college}></Cart>
        ))}
      </div>
    ) : (
      <p className="text-center font-bold text-4xl py-56">No search results found.</p>
    )}
  </div>
  );
};

export default SearchResults;
