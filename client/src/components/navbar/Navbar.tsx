import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-[10vh] flex justify-between items-center px-3 w-auto bg-gunmetal-500">
      <Link
        to="/"
        className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-xl"
      >
        Mesa Rim Buddy Finder
      </Link>
      <Link
        to="/login"
        className="transition ease-in-out duration-300 text-neutral-50 hover:text-neutral-300 text-lg"
      >
        Login
      </Link>
    </nav>
  );
}
