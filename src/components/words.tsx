"use client";

import { useRef } from "react";
import words from "../../public/json/english.100.json";
import classNames from "classnames";

export default function Words() {
  //helps in scrolling the words a user enters more and more characters.
  const wordsRef = useRef(null);

  return (
    <div className="h-80 p-16 overflow-hidden mb-10 glow">
      <div
        className="flex gap-x-4 gap-y-3 flex-wrap justify-center text-3xl text-zinc-500 font-mono"
        ref={wordsRef}
      >
        {words.map((word) => {
          return (
            <p className="flex">
              {word.split("").map((character) => (
                <span
                  className={classNames({
                    "bg-black text-zinc-200": true,
                    "bg-red-400 text-gray": true,
                    "text-red-400": true,
                    "text-zinc-50": true,
                  })}
                >
                  {character}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    </div>
  );
}
