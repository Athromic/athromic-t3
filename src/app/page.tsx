import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Topbar } from "@/components/topbar";
import React from "react";
import SignupForm from "@/components/marketing/signup-form";
import Grid from "@/components/grid";

export const metadata: Metadata = {
  title: "Athromic",
  description:
    "A collection of high-quality, unstyled components for creating beautiful emails.",
};

const Home = () => {
  return (
    <main className="relative overflow-hidden">
      <Grid />
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center ">
            <div className="flex items-center justify-center mb-8">
              <Image
                alt="Athromic Logo"
                height="90"
                src="/static/logo.png"
                width="90"
              />
            </div>
            <section className="relative z-20 mt-16 flex flex-col items-center justify-center gap-[18px] sm:mt-0 sm:gap-6">
              <h1 className="relative flex max-w-xl text-center text-[clamp(40px,10vw,44px)] font-bold leading-none tracking-tighter sm:text-6xl before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['Design systems made functional'] ">
                Design systems made worse
              </h1>
              <p className="relative max-w-lg text-center text-large font-medium text-default-400 [text-shadow:_0_2px_2px_rgb(0_0_0_/_25%)] sm:text-lg">
                Open-source platform for creating, managing, and documenting
                design systems.
              </p>
            </section>
            <SignupForm />
          </div>
          <section className="z-20 mt-10 flex items-center justify-center sm:mt-20 sm:mt-[39px]">
            <p className="text-sm text-default-400">
              Backed by <span className="sr-only">Y</span>
            </p>
            <p> mason</p>
          </section>
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
      <Image
        alt=""
        className="absolute h-full w-full select-none"
        fill
        priority
        src="/static/gradient.webp"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          color: "transparent",
        }}
      />
    </main>
  );
};

export default Home;
