import { Link } from "react-router-dom";

const Cart = ({ collegeDetails }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDate,
    admissionEndTime,
    events,
    researchHistory,
    sports,
  } = collegeDetails;
  return (
    <div className="card card-compact w-96 bg-base-100 mx-auto shadow-xl mt-8 border">
      <figure>
        <img className="h-56 w-full" src={collegeImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{collegeName}</h2>
        <p>
          Admission Date: {admissionDate} to {admissionEndTime}
        </p>
        <p>Research History: {researchHistory}</p>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xl">Sports:</p>
            <ul className="list-disc ml-5">
              {sports?.map((sport, i) => (
                <li key={i}>{sport.sportName}</li>
              ))}
            </ul>
          </div>
          <div className="divider divider-horizontal"></div>
          <div>
            <p className="font-bold text-xl">Events:</p>
            <ul className="list-disc ml-5">
              {events?.map((event, i) => (
                <li key={i}>{event.eventName}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link
            to={`/college-details/${_id}`}
            className="btn btn-success btn-sm btn-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
