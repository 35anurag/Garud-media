const Ourpresence = () => {
  return (
    <div className="min-h-screen bg-[#0c101a] pl-[2rem] pr-[2rem] lg:pl-[5rem] lg:pr-[5rem] pt-[3rem]">
      <div className="flex flex-col items-center justify-center gap-1 text-white">
        <div>
          <h1 className="text-[30px] lg:text-[35px] font-semibold">Our Principle</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-[3rem]">
          <div className="bg-white p-4 flex flex-col items-left  rounded-xl ">
            <h2 className="text-[#0c101a] font-bold text-[18px]">Vision</h2>
            <p className="text-black text-sm">To revolutionize digital solutions, we offer unparalleled development expertise and strategic consulting, empowering businesses to thrive.</p>
          </div>
          
          <div className="mt-[8rem]">
          <div className="bg-white p-4 flex flex-col items-left rounded-xl">
            <h2 className="text-[#0c101a] font-bold text-[18px]">Mission</h2>
            <p className="text-black text-sm">Our mission is to deliver exceptional development projects and strategic consulting, tailored to each client's unique needs, to drive their business forward with confidence.</p>
          </div>
          </div>
        
          <div className="bg-white p-4 flex flex-col items-left  rounded-xl ">
            <h2 className="text-[#0c101a] font-bold text-[18px]">Goals</h2>
            <p className="text-black text-sm">Our goals are to consistently exceed client expectations by delivering high-quality development projects and transformative consulting services, ultimately fostering long-term partnerships and mutual success.</p>
            </div>
            <div className="mt-[150px]">
          <div className="bg-white p-4 flex flex-col items-left  rounded-xl ">
            <h2 className="text-[#0c101a] font-bold text-[18px]">Quality</h2>
            <p className="text-black text-sm">Quality is at the core of everything we do, ensuring our development projects and consulting services exceed industry standards and drive tangible business results.</p>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ourpresence;
