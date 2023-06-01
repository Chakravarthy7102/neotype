import { useCallback } from "react";

const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", `'`];
const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

const keyboardRows = [row1, row2, row3];

export default function Keyboard() {
  const keyMapper = useCallback((keys: string[]) => {
    return (
      <>
        {/* TODO: further invenstigate this issue */}
        <span></span>
        {keys.map((key) => {
          return <Key key={key} keySymbol={key} />;
        })}
      </>
    );
  }, []);

  return (
    <section className="flex flex-col">
      {keyboardRows.map((row) => (
        <div className="flex justify-center space-x-1 space-y-1 items-center">
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
  const pressed = "";
  return (
    <button className="text-sm w-7 h-7 text-secondary border-[0.5px] hover:scale-105 border-zinc-400 drop-shadow-md rounded-md">
      {keySymbol}
    </button>
  );
}
