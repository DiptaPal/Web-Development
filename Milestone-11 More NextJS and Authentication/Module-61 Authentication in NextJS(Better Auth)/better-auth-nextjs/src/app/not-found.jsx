import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

            <h1 className="text-8xl font-bold text-blue-600">
                404
            </h1>

            <h2 className="text-2xl font-semibold mt-4">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-3">
                Sorry, the page you are looking for doesn&apos;t exist.
            </p>

            <Link
                href="/"
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Back to Home
            </Link>

        </div>
    );
}