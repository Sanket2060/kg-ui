import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import Person from "../../src/components/Person";

const persons = [
  {
    name: "Abhisekh Shakya",
    place: "Inspector, Kathmandu",
    backgroundImage: person1,
  },
  {
    name: "Bamdev Ghimire",
    place: "CIIA Officer, Butwal",
    backgroundImage: person2,
  },
  {
    name: "Sita Sharma",
    place: "CIIA Officer, Pokhara",
    backgroundImage: person3,
  },
  {
    name: "Ram Bahadur",
    place: "Officer, Lalitpur",
    backgroundImage: person4,
  },
  {
    name: "Krishna Thapa",
    place: "CIIA Officer, Chitwan",
    backgroundImage: person3,
  },
];

import Service from "@/components/Services";

function Services() {
  return (
    <div>
      <Service />
      <div className="mt-10 flex justify-center items-center flex-col">
        <div className="w-full max-w-4xl">
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex space-x-6 ">
              {" "}
              {/* Added space between the cards */}
              {persons.map((person, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 border-0 "
                >
                  <Card className="h-64 w-64 flex items-center justify-center">
                    {" "}
                    {/* Centered content */}
                    <CardContent className="p-2 flex items-center justify-center">
                      {" "}
                      {/* Centered content */}
                      <Person
                        name={person.name}
                        place={person.place}
                        backgroundImage={person.backgroundImage}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Services;
