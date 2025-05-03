"use client";
import { Button } from "@/components/ui/button";
import React from "react";

export const CollaborateSection = () => {
  return (
    <div className="flex flex-col gap-11 lg:h-screen justify-center items-center text-center">
      <h1 className=" text-[6vw]  leading-[1.1] ">
        Have a project in mind? <br />
        Let’s get to work.
      </h1>
      <Button size="lg">Let’s Collaborate</Button>
    </div>
  );
};
