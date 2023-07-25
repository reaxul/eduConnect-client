import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-results?term=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <form onSubmit={handleSearch} className="join mb-2 mt-[70px] mt">
      <div>
        <div>
          <input
            type="text"
            className="input input-bordered join-item"
            placeholder="Search College Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="indicator">
        <button type="submit" className="btn join-item text-green-500">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
