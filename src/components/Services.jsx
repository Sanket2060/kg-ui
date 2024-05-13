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
    <div className="services-component mb-10">
      <div className=" services font-Poppins text-[#30455E] mb-12">
        <div className="text-center mr-40 font-semibold text-[48px] leading-[72px] mb-8">
          Services
        </div>
        <div className="flex text-xl justify-around">
          <div>
            <img src={policereport} className="w-30 h-28" alt="" />
            <div className="mt-3">Police Report</div>
          </div>
          <div>
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3">IRD Document</div>
          </div>
          <div>
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3">Malpot Document</div>
          </div>
          <div>
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3">Municipality Document</div>
          </div>
          <div>
            <img src={irddocument} alt="" className="w-30 h-28" />
            <div className="mt-3">Ward Document</div>
          </div>
        </div>
      </div>
      <div className="about font-Poppins text-center flex flex-col items-center mb-16 ">
        <div className="text-[48px] leading-[72px] mb-6 font-semibold">
          About <span className="text-[#6361DC]">Kagazpatra</span>
        </div>
        <div className="w-[627px] text-xl leading-[30px]">
          Kagazpatra is a referral document generator platform, whose main
          objective to resolve the hassling problem, excessive charge faces by
          citizen while writing referral’s document.
        </div>
      </div>
      <div className="experts font-Poppins text-[48px] leading-[72px] flex flex-col items-center">
        <div className="font-semibold mb-8">
          <span className="text-[#6361DC] font-Poppins">Expert's</span> With Us
        </div>
        <div className="people flex justify-around  w-screen">
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
