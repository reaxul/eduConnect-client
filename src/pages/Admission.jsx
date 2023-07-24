import { useEffect, useState } from "react";
import CollegeRow from "../components/CollegeRow";

const Admission = () => {
  const [collegeDetails, setCollegeDetails] = useState([]);
  useEffect(() => {
    fetch("https://edu-connect-server.vercel.app/college-details")
      .then((res) => res.json())
      .then((data) => setCollegeDetails(data));
  }, []);
  return (
    <div>
      <div className="overflow-x-auto pt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>College Name</th>
              <th>Admission Start</th>
              <th>Admission End</th>
              <th>Details</th>
              <th>Apply</th>
            </tr>
          </thead>
          <tbody>
            {collegeDetails.map((college) => (
              <CollegeRow college={college} key={college._id}></CollegeRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
