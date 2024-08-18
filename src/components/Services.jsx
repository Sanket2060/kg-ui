import React from "react";
import policereport from "../assets/policereport.png";
import irddocument from "../assets/irddocument.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import Person from "./Person";

function Services() {
  return (
    <div className="services-component mb-10 bg-[#f7f8fe]">
      <div className=" services font-Poppins text-[#30455E] mb-12">
        <div className="text-center  font-semibold text-[48px] leading-[72px] mb-8">
          Services
        </div>
        <div className="flex flex-wrap justify-between md:justify-around">
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
      <div className="experts font-Poppins text-[48px] leading-[72px] flex flex-col items-center">
        <div className="text-2xl sm:text-3xl lg:text-[48px] leading-tight sm:leading-[48px] lg:leading-[72px] mb-6 font-semibold">
          <span className="text-[#6361DC] font-Poppins">Expert's</span> With Us
        </div>
        <div className="people flex flex-col items-center largemobiles:items-start largemobiles:flex-row largemobiles:flex-wrap  *:mb-10 lg:mb-0 justify-around  w-screen">
          <Person
            name="Abhisekh Shakya"
            place="Inspector,Kathmandu"
            backgroundImage={person1}
          />
          <Person
            name="Bamdev Ghimire"
            place="CIIA Officer, Butwal"
            backgroundImage={person2}
          />
          <Person
            name="Bamdev Ghimire"
            place="CIIA Officer, Butwal"
            backgroundImage={person3}
          />
          <Person
            name="Bamdev Ghimire"
            place="CIIA Officer, Butwal"
            backgroundImage={person4}
          />
          <Person
            name="Bamdev Ghimire"
            place="CIIA Officer, Butwal"
            backgroundImage={person3}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;