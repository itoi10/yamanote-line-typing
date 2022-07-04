import { useEffect, useState } from "react";

const Clock: React.FC = () => {
  const [now, setNow] = useState<string>("　");

  const getTime = () => {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, "0");
    const m = String(date.getMinutes()).padStart(2, "0");
    setNow(h + ":" + m);
  };

  useEffect(() => {
    getTime();

    setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return <p className="flex w-full justify-end px-10 text-sm text-blue-200 md:text-2xl">{now}</p>;
};

export default Clock;
