import React from "react";
import CountDown from "./CountDown";
import { Pinterest, Facebook, Instagram } from "@mui/icons-material";

const Display = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-between">
      <main className="h-[70%] w-full bg-stars flex flex-col items-center justify-center gap-[4rem]">
        <header>
          <h1 className="font-bold text-[1.2rem] uppercase heading w-full text-neutral-white">
            we're launching soon
          </h1>
        </header>
        <CountDown />
      </main>
      <footer className="h-[30%] w-full bg-pattern flex flex-row items-center justify-center gap-6">
        <button className="hover:text-soft-red text-neutral-white">
          <Facebook style={{ fontSize: 32 }} />
        </button>
        <button className="hover:text-soft-red text-neutral-white">
          <Instagram style={{ fontSize: 32 }} />
        </button>
        <button className="hover:text-soft-red text-neutral-white">
          <Pinterest style={{ fontSize: 32 }} />
        </button>
      </footer>
    </div>
  );
};

export default Display;
