
import Lottie from "lottie-react";
import { Link, useRouteError } from 'react-router-dom';
import ErrorAnimation from "../assets/ErrorAnimation.json";
// import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
//   useTitle('ErrorPage');
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
      <Lottie animationData={ErrorAnimation} loop={true} />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span> {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link
            to="/"
            className="px-8 py-3 font-semibold rounded bg-green-500 text-gray-900"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
