import { useEffect, useState } from "react";
import Cart from "../components/Cart";

const Colleges = () => {
    const [collegeDetails, setCollegeDetails] = useState([]);
    useEffect(() => {
        fetch('https://edu-connect-server.vercel.app/college-details')
            .then(res => res.json())
            .then(data =>setCollegeDetails(data)
            )
    },[])
    return (
        <div className="pt-20">
        <h2 className="text-4xl text-center font-bold mt-5">
          Find the best College for you 
        </h2>
        <h3 className="text-lg text-center mb-2">
          Take you career to next level with us
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

export default Colleges;