"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { ResponsiveScatterPlot } from "@nivo/scatterplot"
import Link from "next/link" // Corrected import for Link from "next/link"
export default function Component() {
  const [lineData, setLineData] = useState([]);
  const [barData, setBarData] = useState([]);
  // const [pieData, setPieData] = useState([]);
  const [scatterData, setScatterData] = useState([]);

  useEffect(() => {
    console.log("Fetching data");
    axios.get('http://localhost:8000/api/specificUser', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
    .then(response => {
      console.log(response.data);
      const { score } = response.data[0];
      console.log(score);

      let newLineData = [];
      for (var j = 0; j < score[0].length; j++) {
        var arr = [];
        
        for (var i = 0; i < score.length; i++) { 
          if(score[i].length > 0){
            arr.push(parseInt(score[i][j]));
          }
        }
        if(arr.length > 0){
          newLineData.push({
            id: `Level ${j + 1}`,
            data: arr.map((value, index) => ({ x: index, y: value }))
          }); 
        }
      }

      setLineData(newLineData);
      // setBarData, setPieData, setScatterData based on response data
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <div className="flex flex-col h-full w-full">
      <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Progress Over Time</CardTitle>
            <div className="flex space-x-4">
              <div>Red 🔴: Level 1</div>
              <div>Green 🟢: Level 2</div>
              <div>Blue 🔵: Level 3</div>
            </div>
          </CardHeader>
          <CardContent>
            <LineChart data={lineData} className="aspect-[9/4]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>No. of tests taken</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={barData} className="aspect-[3/2]" />
          </CardContent>
        </Card>
        {/* <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Data Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={pieData} className="aspect-[3/2]" />
          </CardContent>
        </Card> */}
        <Card className="col-span-1 lg:col-span-2">
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <h2 className="text-4xl font-medium">Analysis and Retest</h2>
            <div className="flex flex-row items-center justify-center gap-4">
              <Link
                href="/analysis"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Analysis
              </Link>
              <Link
                href="/choice"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Retest
              </Link>
              <Link
                href="/remedies"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Remedies
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Device Information</CardTitle>
            <div className="flex space-x-4">
              <div>Red 🔴: Mobile</div>
              <div>Blue 🔵: Desktop</div>
            </div>
          </CardHeader>
          <CardContent>
            <DotChart data={scatterData} className="aspect-[3/2]" />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function BarChart({ data, ...props }) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={data.length ? data : [
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function DotChart({ data, ...props }) {
  return (
    <div {...props}>
      <ResponsiveScatterPlot
        data={data.length ? data : [
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        blendMode="multiply"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
  
}

function LineChart({ data, ...props }) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={data}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{ type: "linear" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48", "#10b981"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}

// function PieChart({ data, ...props }) {
//   return (
//     <div {...props}>
//       <ResponsivePie
//         data={data}
//         sortByValue
//         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//         cornerRadius={0}
//         padAngle={0}
//         borderWidth={1}
//         borderColor={"#ffffff"}
//         enableArcLinkLabels={false}
//         arcLabel={(d) => `${d.id}`}
//         arcLabelsTextColor={"#ffffff"}
//         arcLabelsRadiusOffset={0.65}
//         colors={["#2563eb"]}
//         theme={{
//           labels: {
//             text: {
//               fontSize: "18px",
//             },
//           },
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   )
// }
