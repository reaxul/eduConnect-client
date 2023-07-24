import { useEffect, useState } from "react";
import Cart from "../components/Cart";

const CollegeCard = () => {
  const [collegeDetails, setCollegeDetails] = useState([]);
  useEffect(() => {
    fetch("https://edu-connect-server.vercel.app/college-details")
      .then((res) => res.json())
      .then((data) => {
        const topCollege = data.slice(0, 3);
        setCollegeDetails(topCollege);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl text-center font-bold mt-5">
        Explore Top-Rated Colleges
      </h2>
      <h3 className="text-lg text-center mb-2">
        Discover the Most Popular and Highly-Ranked Colleges for Your Future
        Education
      </h3>
      {/* <hr className="md:mx-28 mb-1" />
            <hr className="md:mx-28" /> */}
      <div className="grid md:grid-cols-3">
        {collegeDetails.map((singleCollege) => (
          <Cart key={singleCollege._id} collegeDetails={singleCollege}></Cart>
        ))}
      </div>
    </div>
  );
};

export default CollegeCard;
