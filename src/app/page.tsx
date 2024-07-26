import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { Text } from "../components/text";
import { Topbar } from "../components/topbar";
import React from "react";
import { Input, Button } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Athromic",
  description:
    "A collection of high-quality, unstyled components for creating beautiful emails.",
};

const Home = () => {
  return (
    <main>
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                alt="React Email Logo"
                height="90"
                src="/static/logo.png"
                width="90"
              />
            </div>
            <Heading
              className="before:bg-shine relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_writing_emails'] "
              size="9"
            >
              The next generation of writing emails
            </Heading>
            <div className="sm:px-20">
              <Text size="4">
                A collection of high-quality, unstyled components for creating
                beautiful emails using React and TypeScript.
              </Text>
            </div>
            <form className="z-20 mt-8 flex w-full flex-col items-center justify-center gap-6 sm:mt-[42px] sm:flex-row">
              <Input
                isClearable
                type="email"
                label="Email Address"
                variant="faded"
                className="max-w-xs  md:max-w-80 w-full h-[52px]"
              />
              <Button className="max-w-xs w-full bg-white text-black h-12 sm:w-fit">
                Join waitlist
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-default-700 text-black transition-transform group-data-[hover]:translate-x-1.5"
                  aria-hidden="true"
                  focusable="false"
                  tabindex="-1"
                >
                  <svg
                    aria-hidden="true"
                    className="text-base"
                    fill="none"
                    focusable="false"
                    height="1em"
                    role="presentation"
                    viewBox="0 0 16 16"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.6665 8H13.3332M13.3332 8L9.33317 4M13.3332 8L9.33317 12"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </span>
              </Button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
      <Image
        alt=""
        className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0"
        fill
        priority
        src="/static/bg.png"
        style={{ position: "absolute" }}
      />
    </main>
  );
};

export default Home;
