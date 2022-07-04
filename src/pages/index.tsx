import type { NextPage } from "next";
import NextHead from "next/head";
import { useState } from "react";
import { stations } from "@/stations";
import { useEffect } from "react";
import NumberingIcon from "@/components/NumberingIcon";
import Clock from "@/components/Clock";
import Image from "next/image";

const Home: NextPage = () => {
  const [currentNum, setCurrentNum] = useState<number>(0);
  const [dispName, setDispName] = useState<string[]>([]);

  const click = () => {
    let index = currentNum + 1;
    if (index >= stations.length) {
      index = 0;
    }
    setCurrentNum(index);
  };

  useEffect(() => {
    const name = stations[currentNum].name;
    setDispName(name.split(""));
  }, [currentNum]);

  return (
    <>
      <NextHead>
        <title>Typing</title>
      </NextHead>

      <div className="flex h-screen justify-center bg-gray-100">
        <div className="w-full">
          <div className="h-96">
            <div className="h-100 relative z-10 flex w-full justify-start bg-black text-white">
              {/* 行先 */}
              <div className="h-100 flex flex-col justify-end py-1 px-3">
                <p className="text-4xl">{stations[currentNum].boundFor}</p>
                <p className="flex justify-end text-2xl text-blue-200">方面</p>
              </div>

              {/* 縦線 */}
              <div className="h-100 mx-2 w-10 bg-green-400">　</div>
              {/* 駅アイコン */}
              <div>
                <p className="text-2xl">次は</p>
                <div className="flex flex-col items-center">
                  <p className="">{stations[currentNum].ryaku || "　"}</p>
                  <NumberingIcon id={stations[currentNum].id} />
                </div>
              </div>

              <div className="item-center flex w-5/12 flex-col items-center justify-center">
                {/* 時刻 */}
                <Clock />
                {/* 駅名 */}
                <p className="flex w-full justify-between pl-5 text-justify text-8xl">
                  {dispName.map((chara, i) => (
                    <p key={i}>{chara}</p>
                  ))}
                </p>
              </div>
            </div>
            <div className="absolute z-10 flex w-full">
              {/* 乗り換え */}
              {stations[currentNum].transfers && (
                <div className="w-full">
                  <b className="text-lg">{stations[currentNum].name}駅</b>
                  <p>乗換えのご案内</p>
                  <div className="flex w-3/5 flex-row flex-wrap">
                    {stations[currentNum].transfers?.map((transfer, i) => (
                      <span key={i} className="bold w-1/2 p-1 px-2  font-bold">
                        {transfer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 緑の曲線 */}
            <div className="w-full">
              <Image src="/greenline.gif" alt="greenline" width="820" height="255" />
            </div>
          </div>

          <div className="absolute h-screen w-full  border bg-gray-100">
            <button onClick={click}>click</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
