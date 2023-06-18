"use client";

import { useRef } from "react";
import classNames from "classnames";
import useWordStore from "@/zustand/word";

export default function Words() {
  //helps in scrolling the words a user enters more and more characters.
  const wordsRef = useRef(null);

  const words = useWordStore((state) => state.words);

  return (
    <div className="h-[calc(100vh-40vh)] md:p-16 pt-5 overflow-hidden mb-10 glow">
      <div
        className="flex gap-x-4 gap-y-3 flex-wrap justify-center text-3xl text-zinc-500 font-mono"
        ref={wordsRef}
      >
        {words.map((word, wordIndex) => {
          return <Word word={word} wordIndex={wordIndex} />;
        })}
      </div>
    </div>
  );
}

interface WordProps {
  word: string;
  wordIndex: number;
}

function Word({ word, wordIndex }: WordProps) {
  const { currentActiveWordIndex } = useWordStore();

  return (
    <p key={wordIndex} className="flex text-black">
      {word.split("").map((character, index) => (
        <Character character={character} characterIndex={index} />
      ))}
    </p>
  );
}

interface CharacterI {
  character: string;
  characterIndex: number;
}

function Character({ character, characterIndex }: CharacterI) {
  const { errors, currectActiveCharacterIndex } = useWordStore();
  return (
    <span
      className={classNames({
        "bg-black text-zinc-200": true,
        "bg-red-400 text-gray": true,
        "text-red-400": errors[characterIndex],
        "text-zinc-50": true,
      })}
    >
      {character === " " ? "__" : character}
    </span>
  );
}
