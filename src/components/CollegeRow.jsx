import { Link } from "react-router-dom";

const CollegeRow = ({ college }) => {
    const {
        _id,
        collegeName,
        collegeImage,
        admissionDate,
        admissionEndTime,
      } = college;
    return (
        
            <tr className="hover">
             
             <td>
               <div className="flex items-center space-x-3">
                 <div className="avatar">
                   <div className="mask mask-squircle w-12 h-12">
                     <img
                       src={collegeImage}
                       alt="Avatar Tailwind CSS Component"
                     />
                   </div>
                 </div>
               </div>
             </td>
             <td>
               {collegeName}
               
             </td>
            <td>{admissionDate}</td>
            <td>{admissionEndTime}</td>
             <th>
               <Link to={`/college-details/${_id}`} className="btn btn-success btn-outline btn-xs">details</Link>
            </th>
            <th>
                <Link to={`/admission/${_id}`} className="btn btn-outline btn-xs btn-success">Apply</Link>
            </th>
           </tr>
    );
};

export default CollegeRow;