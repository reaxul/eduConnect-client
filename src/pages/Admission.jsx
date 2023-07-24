import { useEffect, useState } from "react";

const Admission = () => {
    const [collegeDetails, setCollegeDetails] = useState([]);
    useEffect(() => {
        fetch('https://edu-connect-server.vercel.app/college-details')
            .then(res => res.json())
            .then(data =>setCollegeDetails(data)
            )
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Admission;