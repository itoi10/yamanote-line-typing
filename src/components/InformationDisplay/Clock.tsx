import { useEffect, useState } from "react";

// 時刻を表示するコンポーネント
export default function Clock() {
  const [now, setNow] = useState<string>("　");

  function getTime() {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    setNow(h + ":" + m);
  }

  // 1秒ごとに時刻を更新する
  useEffect(() => {
    getTime();

    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return <p className="flex w-full justify-end px-10 text-sm text-blue-200 md:text-2xl">{now}</p>;
}
