"use client";

import { useRef } from "react";
import words from "../../public/json/english.100.json";
import classNames from "classnames";

export default function Words() {
  //helps in scrolling the words a user enters more and more characters.
  const wordsRef = useRef(null);

  return (
    <div className="h-[calc(100vh-40vh)] md:p-16 pt-5 overflow-hidden mb-10 glow">
      <div
        className="flex gap-x-4 gap-y-3 flex-wrap justify-center text-3xl text-zinc-500 font-mono"
        ref={wordsRef}
      >
        {words.map((word, wordIndex) => {
          return (
            <p key={wordIndex} className="flex">
              {word.split("").map((character, index) => (
                <span
                  key={character + index}
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
