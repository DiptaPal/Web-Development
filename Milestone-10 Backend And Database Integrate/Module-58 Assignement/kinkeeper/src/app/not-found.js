'use client'
import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-neutral-content flex flex-col justify-between items-center p-6 sm:p-12">

      <div className="flex flex-col items-center text-center max-w-lg my-auto space-y-6">

        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2d523f] text-white shadow-lg animate-bounce">
          <FaExclamationTriangle className="text-3xl" />
        </div>

        <div className="space-y-2">
          <span className="text-sm font-semibold tracking-widest uppercase text-emerald-400">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#64748B] tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            Oops! The page you are looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full justify-center">
          <button
            onClick={() => window.history.back()}
            className="btn bg-[#2d523f] hover:bg-[#37634c] text-white border-none gap-2"
          >
            <FaArrowLeft /> Go Back
          </button>

          <Link
            href="/"
            className="btn bg-white hover:bg-gray-300 text-[#1b3b2b] border-none gap-2 font-semibold"
          >
            <FaHome /> Back to Home
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NotFoundPage;