"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import '@/utils/chartConfig';
import {
  Activity,
  ArrowUpRight,
  DollarSign,
  Users,
  CreditCard
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const pieData = (grade) => ({
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: `Grade ${grade} Distribution`,
      data: [12, 19, 3, 5, 2], // Example data
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
});

// // import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/allusers/")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col mt-20">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45,231</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students in First Standard</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2350</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students in Second Standard</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,234</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Students in Third Standard</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">573</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-rows-2 xl:grid-rows-3">
        <div className="grid gap-4 md:gap-8 lg:grid-rows-2 xl:grid-rows-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Students List</CardTitle>
                <CardDescription>Find students by name.</CardDescription>
              </div>
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Students</TableHead>
                    <TableHead className="hidden xl:table-column">Type</TableHead>
                    <TableHead className="hidden xl:table-column">Status</TableHead>
                    <TableHead className="hidden xl:table-column">Date</TableHead>
                    <TableHead className="text-right">Scores</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell>
                        <div className="font-medium">
                          <Link href="/user-dashboard">{user.username}</Link>
                        </div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {user.email}
                        </div>
                      </TableCell>
                      <TableCell className="hidden xl:table-column">
                        <Badge className="text-xs" variant="outline">
                          {user.schoolName}
                        </Badge>
                      </TableCell>
                      {/* <TableCell className="hidden md:table-cell lg:hidden xl:table-column">
                        {user.date}
                      </TableCell> */}
                      {/* <TableCell className="text-right">{user.scores[scores.length()-1]}</TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* <Card x-chunk="dashboard-01-chunk-5">
            <CardHeader>
              <CardTitle>Student Analysis</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4 ">
                {[1, 2, 3].map((grade) => (
                  <Card key={grade} className="w-1/3">
                    <CardHeader>
                      <CardTitle>Grade {grade} Student Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Pie data={pieData(grade)} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
        </div>
      </main>
    </div>
  );
}
