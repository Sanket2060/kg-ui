import policereport from "../assets/policereport.png";
import irddocument from "../assets/irddocument.png";
import CarouselCom from "./CarouselCom";

function Services() {
  return (
    <div>
      {" "}
      <div className=" services font-Poppins text-[#30455E] mb-12 bg-[#f7f8fe]">
        <div className="text-center  font-semibold text-[48px] leading-[72px] mb-8">
          Services
        </div>
        <div className="flex flex-wrap justify-between md:justify-around p-5">
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
            <img src={policereport} className="w-30 h-28" alt="" />
            <div className="mt-3 text-center">Police Report</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3 text-center">IRD Document</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3 text-center">Malpot Document</div>
          </div>

          {/* For small screens: Single items */}
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3 text-center">Municipality Document</div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/5 md:mb-8 lg:mb-0 mb-8  lg:flex-nowrap">
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3 text-center">Ward Document</div>
          </div>
        </div>
      </div>
      <div className="about font-Poppins text-center flex flex-col items-center mb-16">
        <div className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[48px] lg:leading-[72px] mb-6 font-semibold">
          About <span className="text-[#6361DC]">Kagazpatra</span>
        </div>
        <div className="w-full sm:w-3/4 lg:w-[627px] text-base sm:text-lg lg:text-xl leading-[24px] sm:leading-[28px] lg:leading-[30px] px-4">
          Kagazpatra is a referral document generator platform, whose main
          objective is to resolve the hassling problem and excessive charges
          faced by citizens while writing referral documents.
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center flex-col bg-[#f7f8fe]">
        <div className="w-full max-w-4xl p-10">
          <CarouselCom />
        </div>
      </div>
    </div>
  );
}

export default Services;
