import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Topbar } from "@/components/topbar";
import React from "react";
import SignupForm from "@/components/marketing/signup-form";

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
            <SignupForm />
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
