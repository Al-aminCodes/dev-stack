import logo from "../assets/logo-text.png";
import logoMb from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <section className=" border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="flex justify-between items-center container mx-auto p-7 px-4 sm:px-6 lg:px-8 bg-[#FFFFFF]">
        <img src={logoMb} alt="" className="md:hidden" />
        <img src={logo} alt="" className="" />
        <div className="hidden md:block">
          <ul className="flex justify-center gap-3 text-lg text-[#475569] ">
            <li>
              <a href="" className="text-[#DB2777] hover:text-[#BE185D]">
                Home
              </a>
            </li>

            <li>
              <a href="" className="hover:text-[#DB2777]">
                Technologies
              </a>
            </li>

            <li>
              <a href="" className="hover:text-[#DB2777]">
                Projects
              </a>
            </li>

            <li>
              <a href="" className="hover:text-[#DB2777]">
                About
              </a>
            </li>

            <li>
              <a href="" className="hover:text-[#DB2777]">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <button className="btn btn-ghost font-normal">Sign In</button>
          <button className="btn bg-[#DB2777] rounded-2xl text-white hover:bg-pink-500">
            Sign Up
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
