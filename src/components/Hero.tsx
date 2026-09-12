import hero from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row text-center md:text-left  justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className=" p-4 space-y-3">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.05] mb-3 md:mb-6">
          <span className="text-[#0F172A]">Build Your Ideal</span>
          <br />
          <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-[#475569] md:w-142 text-[18px] p-6 md:p-0 mb-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex justify-center md:justify-start items-center gap-4">
          <button className="btn bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] border-none text-white hover:opacity-90">
            Explore Technologies
          </button>
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </header>
  );
};

export default Hero;
