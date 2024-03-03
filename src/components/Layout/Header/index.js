import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/userSlice";

function Header({ setOpenSidebar, openSidebar }) {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
      <div className="flex items-center px-4">
        <button
          className="text-gray-500 focus:outline-none focus:text-gray-700"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
        </button>
      </div>
      <div className="flex items-center px-4 h-full ">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <input
          className="mx-4 w-full border rounded-md h-10 my-2"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center pr-4">
        {user ? (
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <div className="w-12 h-12 mr-2">
              <img src={user.avatar} alt="avatar" className="rounded-full" />
            </div>
            <button
              className="text-black bg-blue-100 hover:bg-blue-300 border-2 font-medium rounded-lg text-sm px-4 py-2"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <Link
              to="/login"
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
