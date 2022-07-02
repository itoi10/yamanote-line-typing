import type { NextPage } from "next";
import NextHead from "next/head";
import { useState } from "react";
import InputField from "@/components/InputField";

type Station = {
  id: string;
  dispName: string;
  romaji: string;
  transfers?: string[];
};

const Home: NextPage = () => {
  const [inputValue, setInputValue] = useState("");

  const stations: Station[] = [
    {
      id: "01",
      dispName: "東　京",
      romaji: "toukyou",
      transfers: [
        "🚄東北・山形・秋田・北海道・上越・北陸新幹線",
        "🚄東海道・山陽新幹線",
        "🟧中央線",
        "🟧東海道線",
        "🟧上野東京ライン",
        "🟦横須賀線",
        "🟦総武快速線",
        "🟥京葉線",
        "⭕️丸ノ内線",
      ],
    },
    { id: "02", dispName: "神　田", romaji: "kanda" },
    { id: "03", dispName: "秋　葉　原", romaji: "akihabara" },
    { id: "04", dispName: "御　徒　町", romaji: "okatimati" },
    { id: "05", dispName: "上　野", romaji: "ueno" },
    { id: "06", dispName: "鶯　谷", romaji: "uguisudani" },
    { id: "07", dispName: "日　暮　里", romaji: "nippori" },
    { id: "08", dispName: "西　日　暮　里", romaji: "nisinippori" },
    { id: "09", dispName: "田　端", romaji: "tabata" },
    { id: "10", dispName: "駒　込", romaji: "komagome" },
    { id: "11", dispName: "巣　鴨", romaji: "sugamo" },
    { id: "12", dispName: "大　塚", romaji: "ootuka" },
    { id: "13", dispName: "池　袋", romaji: "ikebukuro" },
    { id: "14", dispName: "目　白", romaji: "mejiro" },
    { id: "15", dispName: "高　田　馬　場", romaji: "takadanobaba" },
    { id: "16", dispName: "新　大　久　保", romaji: "sinookubo" },
    { id: "17", dispName: "新　宿", romaji: "sinjuku" },
    { id: "18", dispName: "代　々　木", romaji: "yoyogi" },
    { id: "19", dispName: "原　宿", romaji: "harajuku" },
    { id: "20", dispName: "渋　谷", romaji: "sibuya" },
    { id: "21", dispName: "恵　比　寿", romaji: "ebisu" },
    { id: "22", dispName: "目　黒", romaji: "meguro" },
    { id: "23", dispName: "五　反　田", romaji: "gotanda" },
    { id: "24", dispName: "大　崎", romaji: "oosaki" },
    { id: "25", dispName: "品　川", romaji: "sinagawa" },
    { id: "26", dispName: "高輪ゲートウェイ", romaji: "takanawagateway" },
    { id: "27", dispName: "田　町", romaji: "tamati" },
    { id: "28", dispName: "浜　松　町", romaji: "hamamatutyou" },
    { id: "29", dispName: "新　橋", romaji: "sinbasi" },
    { id: "30", dispName: "有　楽　町", romaji: "yuurakutou" },
  ];

  const [currentNum, setCurrentNum] = useState<number>(0);

  const click = () => {
    let index = currentNum + 1;
    if (index >= stations.length) {
      index = 0;
    }
    setCurrentNum(index);
  };

  return (
    <>
      <NextHead>
        <title>Typing</title>
      </NextHead>

      <div className="flex h-screen justify-center py-8">
        <div className="w-full">
          <div>
            <div className="h-100 w-full bg-black text-white">
              {/* 駅アイコン */}
              <div className="m-1 h-16 w-16 rounded-md border-8 border-solid border-green-400 bg-white text-center">
                <p className="text-lg leading-none text-black">JY</p>
                <p className="text-3xl leading-none text-black">{stations[currentNum].id}</p>
              </div>
              {/* 駅名 */}
              <p className="text-justify text-8xl ">{stations[currentNum].dispName}</p>
            </div>
            {/* 乗り換え */}
            <b>{stations[currentNum].dispName.replace("　", "")}駅</b>
            <p>乗換えのご案内</p>
            {stations[currentNum].transfers?.map((transfer, i) => (
              <p key={i}>{transfer}</p>
            ))}
          </div>
        </div>

        <button onClick={click}>click</button>

        <InputField value={inputValue} onChange={setInputValue} />
      </div>
    </>
  );
};

export default Home;
