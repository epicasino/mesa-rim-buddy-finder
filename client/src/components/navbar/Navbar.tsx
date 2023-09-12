import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { QUERY_ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';

export default function Navbar() {
  const { loading, data } = useQuery(QUERY_ME);

  return (
    <nav className="top-0 h-[10vh] w-full flex justify-between items-center px-3 bg-gunmetal-500 fixed z-50">
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
            onClick={Auth.logout}
          >
            Logout
          </button>
        )}
        <Link
          to="/explore"
          className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg hover:no-underline"
        >
          Explore
        </Link>
        {Auth.loggedIn() ? (
          <Link
            to="/dashboard"
            className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg hover:no-underline"
          >
            {loading ? 'Loading' : data?.me?.username}
          </Link>
        ) : (
          <Link
            to="/login"
            className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg hover:no-underline"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
