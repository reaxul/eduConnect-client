import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase.config";
import { Link, useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state

  const auth = getAuth(app);
    const navigate = useNavigate();

  const handlePasswordReset = () => {
    setLoading(true); // Set loading to true before sending the reset email

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSuccessMessage("Password reset email sent. Please check your inbox.");
          setLoading(false); // Set loading back to false after successful reset email
      })
      .catch((error) => {
        setErrorMessage(error.message);
          setLoading(false); // Set loading back to false if there's an error
      });
  };

  return (
    <div className="py-60 max-w-md mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Password Reset</h2>
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="input input-bordered w-full"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required // Add required attribute
        />
      </div>
      <button
        onClick={handlePasswordReset}
        className={`btn btn-primary w-full ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={loading} // Disable button during loading
      >
        {loading ? "Sending..." : "Reset Password"}
      </button><Link to='/login'  className="btn bg-green-500 hover:bg-green-700 text-white w-full mt-2">
        Back to Login
      </Link>
    </div>
  );
};

export default PasswordReset;
