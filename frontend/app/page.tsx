export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Online Quiz System</h1>
        <p className="text-lg text-gray-700">
          Enhance your knowledge by taking quizzes on various topics. Login to get started!
        </p>
        <a href="/auth/login" className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
          Start Now
        </a>
      </div>
    </div>
  );
}
