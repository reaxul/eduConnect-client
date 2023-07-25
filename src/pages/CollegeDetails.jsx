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

  return (
    <div className="pt-20 bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-auto max-w-3xl">
        <img
          className="w-full h-64 object-cover object-center"
          src={collegeImage}
          alt={collegeName}
        />
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4">{collegeName}</h2>
          <p className="text-lg">
            Welcome to <span className="font-bold">{collegeName}</span>. Our
            admissions will start from {admissionDate} and end on{" "}
            {admissionEndTime}.
          </p>
          <p className="mt-2">
            <span className="font-bold">Admission Process:</span>{" "}
            {admissionProcess}.
          </p>
          <p className="text-sm underline">
            {researchHistory}.
          </p>
          <div className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sports */}
              <div className="bg-blue-800 rounded-lg p-4 hover:bg-blue-700">
                <h3 className="text-xl font-semibold mb-2">Sports</h3>
                {sports.map((s, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-bold">{s.sportName}</p>
                    <p className="text-sm">Category: {s.category}</p>
                    <p className="text-sm">Coach: {s.coach}</p>
                  </div>
                ))}
              </div>

              {/* Events */}
              <div className="bg-green-800 rounded-lg p-4 hover:bg-green-700">
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                {events.map((e, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-bold">{e.eventName}</p>
                    <p className="text-sm">Date: {e.eventDate}</p>
                    <p className="text-sm">{e.eventDetails}</p>
                  </div>
                ))}
              </div>

              {/* Research Works */}
              <div className="bg-purple-800 rounded-lg p-4 hover:bg-purple-700">
                <h3 className="text-xl font-semibold mb-2">Research Works</h3>
                {researchWorks.map((e, i) => (
                  <div key={i} className="mb-2">
                    <p className="font-bold">{e.title}</p>
                    <p className="text-sm">Author: {e.author}</p>
                    <p className="text-sm">Published Date: {e.publishedDate}</p>
                    <a
                      href={e.researchLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
