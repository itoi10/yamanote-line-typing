import { useState } from "react";

const Clock: React.FC = () => {
  const [now, setNow] = useState("");

  // 時刻更新
  setInterval(() => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    setNow(h + ":" + m);
  }, 1000);

  return <p className="flex w-full justify-end px-10 text-2xl text-blue-200">{now}</p>;
};

export default Clock;
