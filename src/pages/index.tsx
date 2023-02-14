import Container from "@/components/Container";
import Head from "@/components/Head";
import InformationDisplay from "@/components/InformationDisplay/InformationDisplay";
import NextButton from "@/components/NextButton";
import TypingString from "@/components/TypingString";
import { Station, stations } from "@/stations";
import type { NextPage } from "next";
import { KeyboardEvent, useEffect, useState } from "react";

const Home: NextPage = () => {
  const [curStation, setCurStation] = useState<Station>(stations[0]);
  const [typingChars, setTypingeChars] = useState<string[]>([]);
  const [typingIdx, setTypingIdx] = useState<number>(0);

  useEffect(() => {
    const romaji = curStation.romaji;
    setTypingeChars(romaji.split(""));
  }, [curStation]);

  const moveToNext = () => {
    let nextIdx = stations.indexOf(curStation) + 1;
    if (nextIdx >= stations.length) nextIdx = 0;
    setCurStation(stations[nextIdx]);
    setTypingIdx(0);
  };

  const keyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    const c = typingChars[typingIdx];
    if (e.key === c) {
      if (typingIdx === typingChars.length - 1) {
        moveToNext();
      } else {
        setTypingIdx(typingIdx + 1);
      }
    }
  };

  return (
    <>
      <Head />
      <Container>
        <div onKeyPress={(e) => keyPress(e)} tabIndex={0} className="h-screen">
          <InformationDisplay curStation={curStation} />
          <TypingString curStation={curStation} typingChars={typingChars} typingIdx={typingIdx} />
          <NextButton curStation={curStation} moveToNext={moveToNext} />
        </div>
      </Container>
    </>
  );
};

export default Home;
