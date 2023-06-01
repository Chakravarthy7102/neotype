const row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"];
const row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", `'`];
const row3 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

export default function Keyboard() {
  return (
    <section className="flex flex-col">
      <div className="flex justify-center">
        {row1.map((key) => {
          return <Key key={key} keySymbol={key} />;
        })}
      </div>
      <div className="flex justify-center">
        {row2.map((key) => {
          return <Key key={key} keySymbol={key} />;
        })}
      </div>
      <div className="flex justify-center">
        {row3.map((key) => {
          return <Key key={key} keySymbol={key} />;
        })}
      </div>
    </section>
  );
}

interface KeyProps {
  keySymbol: string;
}

function Key({ keySymbol }: KeyProps) {
  return (
    <button className="text-sm text-white bg-red-400 border-b-red-100 w-7 h-7">
      {keySymbol}
    </button>
  );
}
