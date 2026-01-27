import { Navbar as FlowbiteNavbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Airplay } from "lucide-react";
import { motion } from "framer-motion";

const MotionFlowbiteNavbar = motion(FlowbiteNavbar);

export function Navbar() {
  return (
    <MotionFlowbiteNavbar
      fluid
      rounded
      className="bg-[#FEA405]! shadow-md! text-[#1C352D]! fixed! top-0! left-0! right-0! z-10!"
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <NavbarBrand href="/">
        <Airplay className="mr-3 ml-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold">Rahul</span>
      </NavbarBrand>
      <NavbarToggle className="text-[#1C352D]" />

      <NavbarCollapse className="text-[#1C352D]">
        <NavbarLink className="text-[#1C352D]" href="#hero">Home</NavbarLink>
        <NavbarLink className="text-[#1C352D]" href="#gallery">Gallery</NavbarLink>
        <NavbarLink className="text-[#1C352D]" href="#about">About</NavbarLink>
        <NavbarLink className="text-[#1C352D]" href="#contact">Contact</NavbarLink>
      </NavbarCollapse>

    </MotionFlowbiteNavbar>
  );
}

