import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-[10vh] flex justify-between items-center px-3 w-auto bg-gunmetal-500">
      <Link to='/' className="text-white">
        Mesa Rim Buddy Finder
      </Link>
      <Link to='/login' className="text-white">
        Login
      </Link>
    </nav>
  )
}
