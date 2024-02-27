import { Link } from "react-router-dom";

function Sidebar({ openSidebar }) {
  return (
    <div
      className={` ${
        openSidebar && "hidden"
      } md:flex flex-col w-64 bg-gray-800`}
    >
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <div
          className="w-12 h-12 relative flex flex-shrink-0 text-white"
          style={{ filter: "invert(100%)" }}
        >
          <img
            className=" w-full h-full object-cover "
            alt="dev"
            src="https://seeklogo.com/images/V/v-a-mimarlik-logo-EF26BE6776-seeklogo.com.png"
          />
        </div>
        <h1 className="text-white font-bold uppercase px-2">Dino</h1>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Dashboard
          </Link>
          <Link
            to="/chat"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            Messages
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
