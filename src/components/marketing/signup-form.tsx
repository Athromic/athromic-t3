"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react"; // Adjust the import based on your NextUI setup

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      setIsInvalid(true);
      return;
    }
    setIsInvalid(false);
    console.log(email);
    setIsLoading(true);
    // Simulate async process
    setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the delay as needed
  };

  return (
    <form
      className="z-20 mt-8 flex w-full flex-col items-center justify-center gap-6 sm:mt-[42px] sm:flex-row"
      onSubmit={handleSubmit}
    >
      <Input
        isClearable
        type="email"
        label="Email Address"
        variant="faded"
        className="max-w-xs md:max-w-80 w-full h-[52px]"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        isInvalid={isInvalid}
      />
      <Button
        className="max-w-xs w-full bg-white text-black h-12 sm:w-fit"
        type="submit"
        isLoading={isLoading}
      >
        Join waitlist
        <span
          className="flex h-5 w-5 items-center justify-center rounded-full bg-default-700 text-black transition-transform group-data-[hover]:translate-x-1.5"
          aria-hidden="true"
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
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            ></path>
          </svg>
        </span>
      </Button>
    </form>
  );
};

export default SignupForm;
