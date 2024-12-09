import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import specific icons

const Navbar = () => {
  return (
    <nav className="bg-purple-200 flex justify-between items-center py-4 px-8 shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-green-700 font-bold text-3xl">&lt;</span>
        <span className="text-gray-800 font-extrabold text-3xl">PassOp</span>
        <span className="text-green-700 font-bold text-3xl">/&gt;</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a
            href="https://github.com/Sarthak5290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 transition-transform transform hover:scale-125 hover:text-purple-600 text-2xl" // Increased size here
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sarthak-gaikwad-848288529029082003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 transition-transform transform hover:scale-125 hover:text-purple-600 text-2xl" // Increased size here
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button className="text-purple-600 focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
