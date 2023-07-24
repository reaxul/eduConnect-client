const SearchBox = () => {
  return (
    <div className="join mb-2 mt-[70px] mt">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Enter College Name"
          />
        </div>
      </div>
      {/* <select className="select select-bordered join-item">
        <option disabled selected>
          Filter
        </option>
        <option>Public</option>
        <option>Private</option>
        <option>Research</option>
      </select> */}
      <div className="indicator">
        <button className="btn join-item text-green-500">Search</button>
      </div>
    </div>
  );
};

export default SearchBox;
