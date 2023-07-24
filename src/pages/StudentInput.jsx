
import { useContext } from "react";
import { RiImageAddFill, RiUserFill, RiMailLine } from "react-icons/ri";
import { AuthContext } from "../provider/AuthProvider";

const StudentInput = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const sellerName = form.sellerName.value;
      const picture = form.picture.value;
      const sellerEmail = form.sellerEmail.value;
      const subcategory = form.subcategory.value;
      const price = form.price.value;
      const rating = form.rating.value;
      const quantity = form.quantity.value;
      const description = form.description.value;
      const addToy = {
        name,
        sellerName,
        sellerEmail,
        subcategory,
        price,
        rating,
        quantity,
        description,
        picture,
      };
      console.log(addToy);
      fetch("https://toy-legend-server.vercel.app/toy-collection", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addToy),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
              alert('Toy added successfully')
            }
        });
    };
    return (
        <div className="pt-20">
         <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full md:max-w-3xl p-6 bg-gray-800 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Student Info</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-4">
            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="picture"
                  className="block mb-1 font-medium text-white"
                >
                  Candidate photo URL
                </label>
              </div>
              <input
                type="text"
                id="picture"
                name="picture"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the URL of the candidate's picture"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiUserFill className="text-white mr-2" />
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-white"
                >
                  Name
                </label>
              </div>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the name of the toy"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiUserFill className="text-white mr-2" />
                <label
                  htmlFor="sellerName"
                  className="block mb-1 font-medium text-white"
                >
                  Guardian Name
                </label>
              </div>
              <input
                type="text"
                id="guardianName"
                name="guardianName"
                defaultValue={user?.displayName}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the name of the seller"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiMailLine className="text-white mr-2" />
                <label
                  htmlFor="sellerEmail"
                  className="block mb-1 font-medium text-white"
                >
                  Student Email
                </label>
              </div>
              <input
                type="email"
                id="studentEmail"
                name="studentEmail"
                defaultValue={user?.email}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter the email of the seller"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="subcategory"
                  className="block mb-1 font-medium text-white"
                >
                  Subject
                </label>
              </div>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your subject</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
                <option value="Polytechnic">Polytechnic</option>
              </select>
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="tel"
                  className="block mb-1 font-medium text-white"
                >
                  Phone Number
                </label>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+8801*********"
              />
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="rating"
                  className="block mb-1 font-medium text-white"
                >
                  GPA
                </label>
              </div>
              <select
                id="gpa"
                name="gpa"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="3">3+</option>
                <option value="3.5">3.5+</option>
                <option value="4">4+</option>
                <option value="4.5">4.5+</option>
                <option value="5">5</option>
              </select>
            </div>

            <div>
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="quantity"
                  className="block mb-1 font-medium text-white"
                >
                  Date of birth
                </label>
              </div>
              <input
                type="date"
                id="date"
                name="date"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="col-span-2">
              <div className="flex items-center">
                <RiImageAddFill className="text-white mr-2" />
                <label
                  htmlFor="description"
                  className="block mb-1 font-medium text-white"
                >
                  Detail Description
                </label>
              </div>
              <textarea
                id="description"
                name="description"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Reason to apply in this college..."
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className=" btn w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default StudentInput;