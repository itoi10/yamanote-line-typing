import { Station } from "@/stations";

type Props = {
  curStation: Station;
  moveToNext: () => void;
};

// 次の駅に移動するボタン
export default function NextButton({ curStation, moveToNext }: Props) {
  return (
    <div className="absolute flex  h-screen w-full justify-center  bg-gray-100">
      <button
        className="m-4 h-10 w-4/5 rounded-2xl bg-gray-400 p-2 text-white outline outline-offset-2 outline-white"
        onClick={moveToNext}
      >
        <span className="text-xs">つぎは</span> {curStation.hiragana}
      </button>
    </div>
  );
}
