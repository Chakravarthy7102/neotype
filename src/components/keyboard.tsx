"use client";

import { useCallback, useEffect, useRef } from "react";

const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", `'`];
const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

const keyboardRows = [row1, row2, row3];

export default function Keyboard() {
  const keyMapper = useCallback((keys: string[]) => {
    return (
      <>
        <span></span>
        {keys.map((key) => {
          return <Key key={key} keySymbol={key} />;
        })}
      </>
    );
  }, []);

  return (
    <section className="flex flex-col">
      {keyboardRows.map((row, index) => (
        <div
          key={index}
          className="flex justify-center space-x-1 space-y-1 items-center"
        >
          {keyMapper(row)}
        </div>
      ))}
    </section>
  );
}

interface KeyProps {
  keySymbol: string;
}

function Key({ keySymbol }: KeyProps) {
  const keyRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function callbackFn(e: KeyboardEvent) {
      if (keyRef.current && keySymbol === e.key) {
        keyRef.current?.classList.add("border-zinc-100", "bg-zinc-300");
        setTimeout(() => {
          keyRef.current?.classList.remove("border-zinc-100", "bg-zinc-300");
        }, 100);
      }
    }

    document.addEventListener("keydown", callbackFn);

    return () => {
      document.removeEventListener("keydown", callbackFn);
    };
  }, []);

  return (
    <button
      ref={keyRef}
      className="text-sm w-7 h-7 text-secondary border-[0.5px] hover:scale-105 border-zinc-400 drop-shadow-md rounded-md"
    >
      {keySymbol}
    </button>
  );
}
