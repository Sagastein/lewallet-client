import { Link } from "react-router-dom";

function Welcome() {
  return (
    <main className="min-h-screen bg-blue-gray-50 grid grid-cols-1 md:grid-cols-2 p-4">
      {/* Left side: Image */}
      <aside className="hidden md:block">
        <img src="./Welcome.svg" alt="Lewallet App" className="w-full h-auto" />
      </aside>

      {/* Right side: Text and Button */}
      <aside className="flex flex-col justify-center items-center text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to Lewallet
        </h1>
        <p className="text-lg text-gray-600">
          Lewallet is an intuitive web app that helps you manage your income and
          expenses effortlessly. Start taking control of your finances today!
        </p>
        <Link to="/portal">
          <button className="px-6 py-3 bg-[green] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </aside>
    </main>
  );
}

export default Welcome;
