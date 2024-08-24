
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";


  // const invoices = [
  // {
  //   name: "hari",
  //   Location: "Pokhara",
  //   invoice: "INV001",
  //   paymentStatus: "Paid",
  //   totalAmount: "$250.00",
  //   paymentMethod: "Credit Card",
  //   service: "kagazpatra",
  //   date: "1/20/2024",
  // },
  // {
  //   name: "hari",
  //   Location: "Pokhara",
  //   invoice: "INV002",
  //   paymentStatus: "Pending",
  //   totalAmount: "$150.00",
  //   paymentMethod: "PayPal",
  //   service: "kuruwa",
  //   date: "2/20/2024",
  // },
  // {
  //   name: "hari",
  //   invoice: "INV003",
  //   Location: "Pokhara",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$350.00",
  //   paymentMethod: "Bank Transfer",
  //   service: "kuruwa",
  //   date: "3/20/2024",
  // },
  // {
  //   name: "hari",
  //   Location: "Pokhara",
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Credit Card",
  //   service: "kuruwa",
  //   date: "4/20/2024",
  // },
  // {
  //   name: "hariom",
  //   Location: "Pokhara",
  //   invoice: "INV009",
  //   paymentStatus: "Paid",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Credit Card",
  //   service: "kuruwa",
  //   date: "4/08/2024",
  // },
  // {
  //   name: "hari",
  //   Location: "Pokhara",
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: "$550.00",
  //   paymentMethod: "PayPal",
  //   service: "kuruwa",
  //   date: "5/20/2024",
  // },
  // {
  //   name: "hari",
  //   Location: "Pokhara",
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: "$200.00",
  //   paymentMethod: "Bank Transfer",
  //   service: "kuruwa",
  //   date: "6/20/2024",
  // },
  // {
  //   invoice: "INV007",
  //   name: "hari",
  //   Location: "Pokhara",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$300.00",
  //   paymentMethod: "Credit Card",
  //   service: "kuruwa",
  //   date: "7/20/2024",
  // },
const Months = [
  {
    id: 1,
    name: "Janaury",
  },
  {
    id: 2,
    name: "Febraury",
  },
  {
    id: 3,
    name: "March",
  },
  {
    id: 4,
    name: "April",
  },
  {
    id: 5,
    name: "May",
  },
  {
    id: 6,
    name: "June",
  },
  {
    id: 7,
    name: "Juley",
  },
  {
    id: 8,
    name: "Augest",
  },
  {
    id: 9,
    name: "September",
  },
  {
    id: 10,
    name: "October",
  },
  {
    id: 11,
    name: "November",
  },
  {
    id: 12,
    name: "December",
  },
];

const UserTable = () => {
  const [selectedMonth, setSelectedMonth] = useState(""); // State to store the selected month
  const [filteredInvoices, setFilteredInvoices] = useState([]); // State to store the filtered invoices
  const [renderMonth,setrenderMonth]=useState([])
  const [mon,setMon]=useState('')

  useEffect(() => {
   setrenderMonth(Months)
   
  }, [selectedMonth]);
  //handling users
  const handle=(e)=>{
    setSelectedMonth(e)
    console.log(e)
    const selectedmon=renderMonth.find((mon)=> mon.id == e)
       setMon(selectedmon.name)
     if (e) {
       const filtered =filteredInvoices.filter((invoice) => {

         const date = new Date(invoice.createdAt);
         const month = date.getMonth() + 1;
         console.log(selectedMonth,month)
         return month === e;
       });

       // If no matching invoices are found for the selected month, display all invoices
       setFilteredInvoices(filtered.length > 0 ? filtered : filteredInvoices);
     } else {
       setFilteredInvoices(filteredInvoices); // If no month is selected, show all invoices
     }

  }
 // fetching user's data
 useEffect(() => {
   const users = async () => {
     try {
       const response = await axios.get(
         "http://localhost:2000/api/v1/auth/users",
         { headers: { accept: "application/json" } }
       );

       // Log the data structure
       console.log(response.data.data); // Logs the array of user objects
       console.log(response.data.status); // Logs the status (true)

       // Iterate over the array to log each user's name
       response.data.data.forEach((user) => {
         console.log(user.name);
       
         
         
          const date = new Date(user.createdAt);
          const month = date.getMonth() + 1;
           console.log(month);// Logs each user's name
       });

       setFilteredInvoices(response.data.data); // Assuming you want to set the array of users as filtered invoices
     } catch (error) {
       console.error("Error fetching users:", error);
     }
   };
   users();
 }, []);
  const toggleVerification = async (userId, action) => {
    try {
       const endpoint =
         action === "true" ? "/api/v1/verify" : "/api/v1/unverify";
       const response = await axios.put(
         `http://localhost:2000${endpoint}`,
         { userid: userId }, // Passing userId in the body
         { headers: { accept: "application/json" } }
       );
       console.log("Verification status updated:", response.data.message);
      // Update the local state to reflect the change
      setFilteredInvoices(
        filteredInvoices.map((user) =>
          user.id === userId ? { ...user, isVerified: !action } : user
        )
      );
    } catch (error) {
      console.error("Error updating verification status:", error);
    }
  };

  return (
    <Card className="w-[100%] border-[1px] px-10">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>users Table</CardTitle>
          <CardDescription className="text-sm font-semibold text-gray-900">
            Showing total visitors for the last {mon}
          </CardDescription>
        </div>
        <Select onValueChange={handle}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select Month" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            {renderMonth.map((j) => (
              <SelectItem key={j.id} value={j.id}>
                {j.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>

      <Table className="w-[100%] border-[1px] px-10">
        <TableHeader className="">
          <TableRow className="">
            <TableHead className="">ID</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="">Services</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((user) => {
            return (
              <TableRow key={user.id} className="my-0">
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  {user.isVerified && user.isVerified.toString() === "true" ? (
                    <span className="p-2  rounded-lg px-4 border-2 border-green-500 text-green-500 font-Poppins font-medium">
                      Verified
                    </span>
                  ) : (
                    <span className="  p-2  rounded-lg w-full border-2 border-red-500 text-red-500 font-Poppins font-medium">
                      Unverified
                    </span>
                  )}
                  {/* {`${console.log(user.isVerified)}`} */}
                </TableCell>
                <TableCell>
                  {
                    new Date(user.createdAt)
                      .toISOString()
                      .replace("T", " ")
                      .split(".")[0]
                  }
                </TableCell>
                <TableCell>{user.Location}</TableCell>
                <TableCell>
                  {user.role && user.role === "KURUWA"
                    ? "KURUWA"
                    : "USER/GENERATEPDF"}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => toggleVerification(user.id, user.isVerified)}
                    className={`py-1 px-3 rounded ${
                      user.isVerified ? "bg-green-500" : "bg-red-500"
                    } text-white`}
                  >
                    {user.isVerified && user.isVerified.toString() === "true"
                      ? "Verified"
                      : "unVerified"}
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};

export default UserTable;

