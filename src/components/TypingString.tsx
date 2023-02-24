import { Station } from "@/stations";
import NumberingIcon from "./NumberingIcon";

type Props = {
  curStation: Station;
  typingChars: string[];
  typingIdx: number;
};

// タイピング中の文字列を表示するコンポーネント
export default function TypingString({ curStation, typingChars, typingIdx }: Props) {
  return (
    <div className="mb-1 flex w-full items-end justify-center  text-3xl md:text-8xl">
      {/* 駅ナンバリング */}
      <NumberingIcon number={curStation.id} />
      {/* 入力した文字を黒、未入力文字を灰色で表示 */}
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
}
