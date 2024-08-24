"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { HoverEffect } from "./ui/card-hover-effect";
import { BackgroundGradient } from "./ui/background-gradient";

function NavBar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <BackgroundGradient>
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home"
            ></MenuItem>
          </Link>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Skills"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Education"
          ></MenuItem>
          <Link href={"/about"}>
            <MenuItem
              setActive={setActive}
              active={active}
              item="About"
            ></MenuItem>
          </Link>
        </Menu>
      </BackgroundGradient>
    </div>
  );
}

export default NavBar;
