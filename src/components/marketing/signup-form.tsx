"use client";
import React, { useState, FormEvent } from "react";
import { Input, Button } from "@nextui-org/react";
import { toast } from "sonner";

const SignupForm = () => {
  const [value, setValue] = React.useState("");

  const validateEmail = (value: string) =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;
    return validateEmail(value) ? false : true;
  }, [value]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.error("The waitlist signup is being built, check back soon!");
    setIsLoading(true);
  };

  return (
    <form
      className="z-20 mt-8 flex w-full flex-col items-center justify-center gap-6 sm:mt-[42px] sm:flex-row"
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col items-center w-full max-w-xs md:max-w-80">
        <Input
          isClearable
          value={value}
          type="email"
          label="Email Address"
          className="w-full h-[52px] no-zoom text-base"
          isInvalid={isInvalid}
          color={isInvalid ? "danger" : "default"}
          onValueChange={setValue}
        />
      </div>
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
