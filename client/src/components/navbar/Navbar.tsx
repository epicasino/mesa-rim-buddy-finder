import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

export default function Navbar() {
  const logOut = () => {
    Auth.logout();
  };

  return (
    <nav className="top-0 h-[10vh] w-screen flex justify-between items-center px-3 bg-gunmetal-500">
      <Link
        to="/"
        className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 hover:no-underline text-xl"
      >
        Mesa Rim Buddy Finder
      </Link>
      <div className="navbar-links flex gap-5">
        {Auth.loggedIn() && (
          <button
            type="button"
            className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg"
            onClick={logOut}
          >
            Logout
          </button>
        )}
        <Link
          to="/login"
          className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg hover:no-underline"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
