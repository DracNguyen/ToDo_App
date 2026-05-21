import React from "react";

const NotFound = () => {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen text-center bg-slate-50">
      <img
        src="404_Not_Found.png"
        alt="Page Not Found"
        className="max-w-full mb-6 w-96"
      />
      <p className="text-xl font-semibold">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-3 font-medium text-white transition shadow-md bg-primary rounded-2xl hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
