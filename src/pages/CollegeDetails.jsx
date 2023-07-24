import { useLoaderData } from "react-router-dom";

const CollegeDetails = () => {
  const collegeDetails = useLoaderData();
  const {
    collegeName,
    collegeImage,
    admissionDate,
    admissionEndTime,
    admissionProcess,
    events,
      researchHistory,
      researchWorks,
    sports,
  } = collegeDetails;
  console.log(collegeDetails);
  return (
    <div className="pt-20">
      <img className="rounded-lg w-1/2 mx-auto" src={collegeImage} alt="" />
      <div>
        <p className="text-center font-bold text-5xl my-5">{collegeName}</p>
        <p className="text-2xl">
          Welcome to <span className="font-bold">{collegeName}</span>. Our
          Admission will be start from {admissionDate} and will be ends at{" "}
          {admissionEndTime}.
        </p>
        <p className="mt-2">
          <span className="font-bold text-">Admission Process:</span>{" "}
          {admissionProcess}.
        </p>
        <div className="flex justify-between">
          <div>
            <p className="font-bold text-xl">Sports:</p>
            <div>
              {sports.map((s, i) => (
                <div
                  className="border rounded-md mb-2 p-2 hover:border-green-500"
                  key={i}
                >
                  <p>Name: {s.sportName}</p>
                  <p>Category: {s.category}</p>
                  <p>{s.coach}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div>
            <p className="font-bold text-xl">Events:</p>
            <div>
              {events.map((e, i) => (
                <div
                  className="border rounded-md mb-2 p-2 hover:border-green-500"
                  key={i}
                >
                  <p>{e.eventName}</p>
                  <p>{e.eventDate}</p>
                  <p>{e.eventDetails}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="divider md:divider-horizontal"></div>
          <div>
            <p className="font-bold text-xl">Research Works:</p>
            <div>
              {researchWorks.map((e, i) => (
                <div
                  className="border rounded-md mb-2 p-2 hover:border-green-500"
                  key={i}
                >
                  <p>{e.title}</p>
                  <p>{e.author}</p>
                  <p>{e.publishedDate}</p>
                  <p>{e.researchLink}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
