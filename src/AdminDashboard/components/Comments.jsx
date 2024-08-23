import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import kagazpatralogo from "../../assets/person4.png"

const Comments = () => {
  return (
    <div className="h-full w-full  border-[1px] px-10 rounded-md">
      <h1 className="text-lg font-semibold">Recent Comments</h1>
      <div className=" flex gap-5 p-5  border-b-[1px] ">
        <div className="pt-2">
          <Avatar >
            <AvatarImage src={kagazpatralogo} alt="/logo" />

            <AvatarFallback>cv</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="text-md font-bold"> hariom</span>
          <span className="">8/20/2024</span>
          <span className="mt-3">
            {" "}
            This simulates fetching data in a real-world application, even
            though the data is static.
          </span>
        </div>
      </div>
      <div className=" flex gap-5 p-3  border-b-[1px] ">
        <div>
          <Avatar>
            <AvatarImage src={kagazpatralogo} />

            <AvatarFallback>cv</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="text-md font-bold"> hariom</span>
          <span className="">8/20/2024</span>
          <span className="mt-2">
            {" "}
            This simulates fetching data in a real-world application, even
            though the data is static.
          </span>
        </div>
      </div>
      <div className=" flex gap-5 p-3  border-b-[1px] ">
        <div>
          <Avatar>
            <AvatarImage src={kagazpatralogo} />

            <AvatarFallback>cv</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col">
          <span className="text-md font-bold"> hariom</span>
          <span className="">8/20/2024</span>
          <span className="mt-2">
            {" "}
            This simulates fetching data in a real-world application, even
            though the data is static.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Comments
