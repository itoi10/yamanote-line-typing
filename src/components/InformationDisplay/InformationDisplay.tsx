import { Station } from "@/stations";
import Image from "next/image";
import { useEffect, useState } from "react";
import NumberingIcon from "../NumberingIcon";
import Clock from "./Clock";

type Props = {
  curStation: Station;
};

const InformationDisplay: React.FC<Props> = ({ curStation }) => {
  const [dispName, setDispName] = useState<string[]>([]);

  useEffect(() => {
    const name = curStation.name;
    setDispName(name.split(""));
  }, [curStation.name]);

  return (
    <>
      <div className="h-96">
        <div className="h-100 relative z-10 flex w-full justify-start bg-black text-white">
          {/* 行先 */}
          <div className="h-100 flex flex-col justify-end py-1 px-3">
            <p className="md:text-4xl">{curStation.boundFor}</p>
            <p className="flex justify-end text-blue-200 md:text-2xl">方面</p>
          </div>
          {/* 緑の縦線 */}
          <div className="my-2 mx-2 w-5 bg-green-400 md:w-10">　</div>

          <div>
            <p className="md:text-2xl">次は</p>
            <div className="flex flex-col items-center">
              <p className="">{curStation.threeLetterCode || "　"}</p>
              {/* 駅アイコン */}
              <NumberingIcon number={curStation.id} />
            </div>
          </div>

          <div className="item-center flex w-5/12 flex-col items-center justify-center">
            {/* 時刻 */}
            <Clock />
            {/* 駅名 */}
            <p className="flex w-full justify-between pl-5 text-justify text-3xl md:text-8xl">
              {dispName.map((chara, i) => (
                <p key={i}>{chara}</p>
              ))}
            </p>
          </div>
        </div>
        <div className="absolute z-10 flex w-full">
          {/* 乗り換え */}
          {curStation.transfers && (
            <div className="w-full">
              <b className="text-lg">{curStation.name}駅</b>
              <p>乗換えのご案内</p>
              <div className="flex flex-row flex-wrap md:w-3/5">
                {curStation.transfers?.map((transfer, i) => (
                  <span
                    key={i}
                    className="bold font-outline w-1/2 stroke-inherit  p-1 px-2 font-bold"
                  >
                    {transfer}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 緑の曲線 */}
        <div className="w-full">
          <Image src="/greenline.gif" alt="" width={"820"} height={"255"} />
        </div>
      </div>
    </>
  );
};

export default InformationDisplay;
