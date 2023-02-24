import Container from "@/components/Container";
import Head from "@/components/Head";
import InformationDisplay from "@/components/InformationDisplay/InformationDisplay";
import NextButton from "@/components/NextButton";
import TypingString from "@/components/TypingString";
import { Station, stations } from "@/stations";
import { KeyboardEvent, useEffect, useState } from "react";

export default function Home() {
  // 現在の駅
  const [curStation, setCurStation] = useState<Station>(stations[0]);
  // 現在タイピング中の文字リスト
  const [typingChars, setTypingeChars] = useState<string[]>([]);
  // 現在タイピング中の文字のインデックス
  const [typingIdx, setTypingIdx] = useState<number>(0);

  useEffect(() => {
    const romaji = curStation.romaji;
    setTypingeChars(romaji.split(""));
  }, [curStation]);

  // 次の駅に移動する
  function moveToNext() {
    let nextIdx = stations.indexOf(curStation) + 1;
    if (nextIdx >= stations.length) nextIdx = 0;
    setCurStation(stations[nextIdx]);
    setTypingIdx(0);
  }

  // 文字を入力したときの処理
  function keyDown(e: KeyboardEvent<HTMLDivElement>) {
    console.log(e);
    const c = typingChars[typingIdx];
    if (e.key.toLowerCase() === c) {
      if (typingIdx === typingChars.length - 1) {
        moveToNext();
      } else {
        setTypingIdx(typingIdx + 1);
      }
    }
  }

  return (
    <>
      <Head />
      <Container>
        <div onKeyDown={(e) => keyDown(e)} tabIndex={0} className="h-screen">
          <InformationDisplay curStation={curStation} />
          <TypingString curStation={curStation} typingChars={typingChars} typingIdx={typingIdx} />
          <NextButton curStation={curStation} moveToNext={moveToNext} />
        </div>
      </Container>
    </>
  );
}
