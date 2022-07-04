import { Station } from "@/stations";
import NumberingIcon from "./NumberingIcon";

type Props = {
  curStation: Station;
  typingChars: string[];
  typingIdx: number;
};

const TypingString: React.FC<Props> = ({ curStation, typingChars, typingIdx }) => {
  return (
    <div className="mb-1 flex w-full items-end justify-center  text-3xl md:text-8xl">
      <NumberingIcon number={curStation.id} />
      <div className="ml-6 flex">
        {typingChars.map((char, i) => {
          let color = "text-gray-300";
          if (i < typingIdx) {
            color = "text-gray-800";
          }
          return (
            <p className={color} key={i}>
              {char}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TypingString;
