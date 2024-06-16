"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import ModeToggle from "@/components/ui/mode-toggle";

export default function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center mb-4">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-6xl mx-auto z-50 flex justify-between items-center w-full px-4",
        className
      )}
    >
      <div className="flex-1 flex justify-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/">Home</HoveredLink>
              <HoveredLink href="/login">Login</HoveredLink>
              <HoveredLink href="/signup">Signup</HoveredLink>
              {/* <HoveredLink href="/seo">Search Engine Optimization</HoveredLink> */}
              <HoveredLink href="https://vopa.in/">
                Our Main Website
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Explore">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/speech">speech</HoveredLink>
              <HoveredLink href="/maths">maths</HoveredLink>
              <HoveredLink href="/user-dashboard">User dashboard</HoveredLink>
              {/* <HoveredLink href="/admin-dashboard">Admin dashboard</HoveredLink> */}
              {/* <HoveredLink href="https://vopa.in/">
                Our Main Website
              </HoveredLink> */}
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Our Other Projects"
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="V-School for Students"
                href="https://vopa.in/free-online-education/"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="VSchool is a free online platform and an App designed to address the challenges faced by deprived children. It provides free online educational resources to students studying in the local language medium! It is a system that can be replicated to any district, state or syllabus."
              />
              <ProductItem
                title="School Transformation"
                href="https://vopa.in/school-transformation/"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="We work with individual schools to transform the educational experience of the schoolchildren by developing teacher capacities and setting sustainable systems and culture."
              />
              {/* <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              /> */}
              <ProductItem
                title="Teaching"
                href="https://vopa.in/school-transformation/"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="We have developed a unique lesson preparation module that addresses the teacher capacity-building challenges. This technology enables the teachers to increase their subject knowledge and teaching skills."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Coming Soon...">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/pricings">see..</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
      <ModeToggle /> {/* Adjusted left margin */}
    </div>
  );
}
