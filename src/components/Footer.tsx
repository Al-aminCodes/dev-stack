import footerLogo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 ">
      <div className="container mx-auto m-15 px-4 sm:px-6 lg:px-8 ">
        {/* first div for logo product  */}
        <div className="flex flex-col md:flex-row text-center md:text-left  justify-between border-b border-gray-200 pb-10 ">
          {/* image */}
          <div className="space-y-3  ">
            <img
              src={footerLogo}
              alt="Developer Stack image"
              className="mx-auto md:mx-0"
            />
            <p className="text-[#64748B] md:w-100  ">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <ul className="text-black font-bold flex gap-3 justify-center md:justify-start  ">
              <li>
                <a href="">Github</a>
              </li>
              <li className="list-disc ml-5 md:list-none md:ml-0">
                <a href="">Twitter</a>
              </li>

              <li className="list-disc ml-5 md:list-none md:ml-0">
                <a href="">LinkedIn</a>
              </li>
            </ul>
          </div>
          {/* product */}
          <div className="space-y-3 hidden lg:block">
            <h2 className="text-2xl font-bold">PRODUCT</h2>
            <ul className="text-[#64748B] space-y-3">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>
          {/* company */}
          <div className="space-y-3 hidden md:block">
            <h2 className="text-2xl font-bold">COMPANY</h2>
            <ul className="text-[#64748B] space-y-3">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          {/* ligal div */}
          <div className="space-y-3 hidden lg:block">
            <h2 className="text-2xl font-bold">LEGAL</h2>
            <ul className="text-[#64748B] space-y-3">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        {/* copy Right claim div police link */}
        <div className="flex justify-between pt-10 ">
          {/* copy right */}
          <div>
            <p className="text-[#64748B]">
              © 2026 Dev Stack. All rights reserved.
            </p>
          </div>
          {/* police link */}

          <ul className="text-[#64748B] flex gap-3">
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
