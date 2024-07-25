"use client";
import classnames from "classnames";
import Link from "next/link";
import * as React from "react";
import { Button } from "../components/button";
import { IconArrowRight } from "../components/icons";

export const Menu: React.FC = () => (
  <nav className="flex items-center gap-2">
    <ul className="flex gap-2">
      <MenuItem className="w-full px-2" href="https://docs.athromic.com">
        Docs
      </MenuItem>
    </ul>
    <span
      aria-hidden="true"
      className="bg-slate-6 mx-2 hidden h-5 w-px sm:!inline-block"
    />
    <ul className="flex gap-2">
      <Button asChild size="3">
        <Link href="https://www.athromic.com/app/account">
          Account
          <IconArrowRight />
        </Link>
      </Button>
    </ul>
  </nav>
);

interface MenuItemProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const MenuItem: React.FC<Readonly<MenuItemProps>> = ({
  className,
  children,
  href,
}) => (
  <li className="inline-flex items-center justify-center">
    <Link
      className={classnames(
        "text-slate-11 inline-flex h-8 items-center justify-center rounded-md text-sm",
        "hover:text-slate-12 hover:bg-white/10",
        "outline-none focus:bg-white/10 focus:ring-2 focus:ring-white/20",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  </li>
);
