"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
 
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import axios from "axios"
const chartData = [
  { date: "2024-04-01", Kuruwa: 222, Kagazpatra: 150 },
  { date: "2024-04-02", Kuruwa: 97, Kagazpatra: 180 },
  { date: "2024-04-03", Kuruwa: 167, Kagazpatra: 120 },
  { date: "2024-04-04", Kuruwa: 242, Kagazpatra: 260 },
  { date: "2024-04-05", Kuruwa: 373, Kagazpatra: 290 },
  { date: "2024-04-06", Kuruwa: 301, Kagazpatra: 340 },
  { date: "2024-04-07", Kuruwa: 245, Kagazpatra: 180 },
  { date: "2024-04-08", Kuruwa: 409, Kagazpatra: 320 },
  { date: "2024-04-09", Kuruwa: 59, Kagazpatra: 110 },
  { date: "2024-04-10", Kuruwa: 261, Kagazpatra: 190 },
  { date: "2024-04-11", Kuruwa: 327, Kagazpatra: 350 },
  { date: "2024-04-12", Kuruwa: 292, Kagazpatra: 210 },
  { date: "2024-04-13", Kuruwa: 342, Kagazpatra: 380 },
  { date: "2024-04-14", Kuruwa: 137, Kagazpatra: 220 },
  { date: "2024-04-15", Kuruwa: 120, Kagazpatra: 170 },
  { date: "2024-04-16", Kuruwa: 138, Kagazpatra: 190 },
  { date: "2024-04-17", Kuruwa: 446, Kagazpatra: 360 },
  { date: "2024-04-18", Kuruwa: 364, Kagazpatra: 410 },
  { date: "2024-04-19", Kuruwa: 243, Kagazpatra: 180 },
  { date: "2024-04-20", Kuruwa: 89, Kagazpatra: 150 },
  { date: "2024-04-21", Kuruwa: 137, Kagazpatra: 200 },
  { date: "2024-04-22", Kuruwa: 224, Kagazpatra: 170 },
  { date: "2024-04-23", Kuruwa: 138, Kagazpatra: 230 },
  { date: "2024-04-24", Kuruwa: 387, Kagazpatra: 290 },
  { date: "2024-04-25", Kuruwa: 215, Kagazpatra: 250 },
  { date: "2024-04-26", Kuruwa: 75, Kagazpatra: 130 },
  { date: "2024-04-27", Kuruwa: 383, Kagazpatra: 420 },
  { date: "2024-04-28", Kuruwa: 122, Kagazpatra: 180 },
  { date: "2024-04-29", Kuruwa: 315, Kagazpatra: 240 },
  { date: "2024-04-30", Kuruwa: 454, Kagazpatra: 380 },
  { date: "2024-05-01", Kuruwa: 165, Kagazpatra: 220 },
  { date: "2024-05-02", Kuruwa: 293, Kagazpatra: 310 },
  { date: "2024-05-03", Kuruwa: 247, Kagazpatra: 190 },
  { date: "2024-05-04", Kuruwa: 385, Kagazpatra: 420 },
  { date: "2024-05-05", Kuruwa: 481, Kagazpatra: 390 },
  { date: "2024-05-06", Kuruwa: 498, Kagazpatra: 520 },
  { date: "2024-05-07", Kuruwa: 388, Kagazpatra: 300 },
  { date: "2024-05-08", Kuruwa: 149, Kagazpatra: 210 },
  { date: "2024-05-09", Kuruwa: 227, Kagazpatra: 180 },
  { date: "2024-05-10", Kuruwa: 293, Kagazpatra: 330 },
  { date: "2024-05-11", Kuruwa: 335, Kagazpatra: 270 },
  { date: "2024-05-12", Kuruwa: 197, Kagazpatra: 240 },
  { date: "2024-05-13", Kuruwa: 197, Kagazpatra: 160 },
  { date: "2024-05-14", Kuruwa: 448, Kagazpatra: 490 },
  { date: "2024-05-15", Kuruwa: 473, Kagazpatra: 380 },
  { date: "2024-05-16", Kuruwa: 338, Kagazpatra: 400 },
  { date: "2024-05-17", Kuruwa: 499, Kagazpatra: 420 },
  { date: "2024-05-18", Kuruwa: 315, Kagazpatra: 350 },
  { date: "2024-05-19", Kuruwa: 235, Kagazpatra: 180 },
  { date: "2024-05-20", Kuruwa: 177, Kagazpatra: 230 },
  { date: "2024-05-21", Kuruwa: 82, Kagazpatra: 140 },
  { date: "2024-05-22", Kuruwa: 81, Kagazpatra: 120 },
  { date: "2024-05-23", Kuruwa: 252, Kagazpatra: 290 },
  { date: "2024-05-24", Kuruwa: 294, Kagazpatra: 220 },
  { date: "2024-05-25", Kuruwa: 201, Kagazpatra: 250 },
  { date: "2024-05-26", Kuruwa: 213, Kagazpatra: 170 },
  { date: "2024-05-27", Kuruwa: 420, Kagazpatra: 460 },
  { date: "2024-05-28", Kuruwa: 233, Kagazpatra: 190 },
  { date: "2024-05-29", Kuruwa: 78, Kagazpatra: 130 },
  { date: "2024-05-30", Kuruwa: 340, Kagazpatra: 280 },
  { date: "2024-05-31", Kuruwa: 178, Kagazpatra: 230 },
  { date: "2024-06-01", Kuruwa: 178, Kagazpatra: 200 },
  { date: "2024-06-02", Kuruwa: 470, Kagazpatra: 410 },
  { date: "2024-06-03", Kuruwa: 103, Kagazpatra: 160 },
  { date: "2024-06-04", Kuruwa: 439, Kagazpatra: 380 },
  { date: "2024-06-05", Kuruwa: 88, Kagazpatra: 140 },
  { date: "2024-06-06", Kuruwa: 294, Kagazpatra: 250 },
  { date: "2024-06-07", Kuruwa: 323, Kagazpatra: 370 },
  { date: "2024-06-08", Kuruwa: 385, Kagazpatra: 320 },
  { date: "2024-06-09", Kuruwa: 438, Kagazpatra: 480 },
  { date: "2024-06-10", Kuruwa: 155, Kagazpatra: 200 },
  { date: "2024-06-11", Kuruwa: 92, Kagazpatra: 150 },
  { date: "2024-06-12", Kuruwa: 492, Kagazpatra: 420 },
  { date: "2024-06-13", Kuruwa: 81, Kagazpatra: 130 },
  { date: "2024-06-14", Kuruwa: 426, Kagazpatra: 380 },
  { date: "2024-06-15", Kuruwa: 307, Kagazpatra: 350 },
  { date: "2024-06-16", Kuruwa: 371, Kagazpatra: 310 },
  { date: "2024-06-17", Kuruwa: 475, Kagazpatra: 520 },
  { date: "2024-06-18", Kuruwa: 107, Kagazpatra: 170 },
  { date: "2024-06-19", Kuruwa: 341, Kagazpatra: 290 },
  { date: "2024-06-20", Kuruwa: 408, Kagazpatra: 450 },
  { date: "2024-06-21", Kuruwa: 169, Kagazpatra: 210 },
  { date: "2024-06-22", Kuruwa: 317, Kagazpatra: 270 },
  { date: "2024-06-23", Kuruwa: 480, Kagazpatra: 530 },
  { date: "2024-06-24", Kuruwa: 132, Kagazpatra: 180 },
  { date: "2024-06-25", Kuruwa: 141, Kagazpatra: 190 },
  { date: "2024-06-26", Kuruwa: 434, Kagazpatra: 380 },
  { date: "2024-06-27", Kuruwa: 448, Kagazpatra: 490 },
  { date: "2024-06-28", Kuruwa: 149, Kagazpatra: 200 },
  { date: "2024-06-29", Kuruwa: 103, Kagazpatra: 160 },
  { date: "2024-06-30", Kuruwa: 446, Kagazpatra: 400 },
  { date: "2024-07-01", Kuruwa: 178, Kagazpatra: 200 },
  { date: "2024-07-02", Kuruwa: 470, Kagazpatra: 410 },
  { date: "2024-07-03", Kuruwa: 103, Kagazpatra: 170 },
  { date: "2024-07-04", Kuruwa: 439, Kagazpatra: 380 },
  { date: "2024-07-05", Kuruwa: 88, Kagazpatra: 140 },
  { date: "2024-07-07", Kuruwa: 294, Kagazpatra: 250 },
  { date: "2024-07-07", Kuruwa: 323, Kagazpatra: 370 },
  { date: "2024-07-08", Kuruwa: 385, Kagazpatra: 320 },
  { date: "2024-07-09", Kuruwa: 438, Kagazpatra: 480 },
  { date: "2024-07-10", Kuruwa: 155, Kagazpatra: 200 },
  { date: "2024-07-11", Kuruwa: 92, Kagazpatra: 150 },
  { date: "2024-07-12", Kuruwa: 492, Kagazpatra: 420 },
  { date: "2024-07-13", Kuruwa: 81, Kagazpatra: 130 },
  { date: "2024-07-14", Kuruwa: 427, Kagazpatra: 380 },
  { date: "2024-07-15", Kuruwa: 307, Kagazpatra: 350 },
  { date: "2024-07-17", Kuruwa: 371, Kagazpatra: 310 },
  { date: "2024-07-17", Kuruwa: 475, Kagazpatra: 520 },
  { date: "2024-07-18", Kuruwa: 107, Kagazpatra: 170 },
  { date: "2024-07-19", Kuruwa: 341, Kagazpatra: 290 },
  { date: "2024-07-20", Kuruwa: 408, Kagazpatra: 450 },
  { date: "2024-07-21", Kuruwa: 179, Kagazpatra: 210 },
  { date: "2024-07-22", Kuruwa: 317, Kagazpatra: 270 },
  { date: "2024-07-23", Kuruwa: 480, Kagazpatra: 530 },
  { date: "2024-07-24", Kuruwa: 132, Kagazpatra: 180 },
  { date: "2024-07-25", Kuruwa: 141, Kagazpatra: 190 },
  { date: "2024-07-27", Kuruwa: 434, Kagazpatra: 380 },
  { date: "2024-07-27", Kuruwa: 448, Kagazpatra: 490 },
  { date: "2024-07-28", Kuruwa: 149, Kagazpatra: 200 },
  { date: "2024-07-29", Kuruwa: 103, Kagazpatra: 170 },
  { date: "2024-07-30", Kuruwa: 446, Kagazpatra: 400 },
  { date: "2024-08-01", Kuruwa: 178, Kagazpatra: 200 },
  { date: "2024-08-02", Kuruwa: 470, Kagazpatra: 410 },
  { date: "2024-08-03", Kuruwa: 103, Kagazpatra: 180 },
  { date: "2024-08-04", Kuruwa: 439, Kagazpatra: 380 },
  { date: "2024-08-05", Kuruwa: 88, Kagazpatra: 140 },
  { date: "2024-08-08", Kuruwa: 294, Kagazpatra: 250 },
  { date: "2024-08-07", Kuruwa: 323, Kagazpatra: 370 },
  { date: "2024-08-08", Kuruwa: 385, Kagazpatra: 320 },
  { date: "2024-08-09", Kuruwa: 438, Kagazpatra: 480 },
  { date: "2024-08-10", Kuruwa: 155, Kagazpatra: 200 },
  { date: "2024-08-11", Kuruwa: 92, Kagazpatra: 150 },
  { date: "2024-08-12", Kuruwa: 492, Kagazpatra: 420 },
  { date: "2024-08-13", Kuruwa: 81, Kagazpatra: 130 },
  { date: "2024-08-14", Kuruwa: 428, Kagazpatra: 380 },
  { date: "2024-08-15", Kuruwa: 307, Kagazpatra: 350 },
  { date: "2024-08-18", Kuruwa: 371, Kagazpatra: 310 },
  { date: "2024-08-17", Kuruwa: 475, Kagazpatra: 520 },
  { date: "2024-08-18", Kuruwa: 107, Kagazpatra: 170 },
  { date: "2024-08-19", Kuruwa: 341, Kagazpatra: 290 },
  { date: "2024-08-20", Kuruwa: 408, Kagazpatra: 450 },
  { date: "2024-08-21", Kuruwa: 189, Kagazpatra: 210 },
  { date: "2024-08-22", Kuruwa: 317, Kagazpatra: 270 },
  { date: "2024-08-23", Kuruwa: 480, Kagazpatra: 530 },
  { date: "2024-08-24", Kuruwa: 132, Kagazpatra: 180 },
  { date: "2024-08-25", Kuruwa: 141, Kagazpatra: 190 },
  { date: "2024-08-28", Kuruwa: 434, Kagazpatra: 380 },
  { date: "2024-08-27", Kuruwa: 448, Kagazpatra: 490 },
  { date: "2024-08-28", Kuruwa: 149, Kagazpatra: 200 },
  { date: "2024-08-29", Kuruwa: 103, Kagazpatra: 180 },
  { date: "2024-08-30", Kuruwa: 446, Kagazpatra: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
 Kuruwa: {
    label: "Kuruwa",
    color: "hsl(var(--chart-1))",
  },
  Kagazpatra: {
    label: "Kagazpatra",
    color: "hsl(var(--chart-4))",
  },
} 

const Chartcom = () => {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract;

    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    } else {
      daysToSubtract = 90;
    }

    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });


  return (
    <Card className="w-full ">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Area Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last{" "}
            {timeRange === "90d"
              ? "3 months"
              : timeRange === "30d"
                ? "30 days"
                : "7 days"}
          </CardDescription>
        </div>
        <Select
          value={timeRange}
          onValueChange={(value) => setTimeRange(value)}
        >
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.2}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Kagazpatra"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="Kuruwa"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
export default Chartcom