type Props = {
  number: string;
};

// 駅ナンバリング
const NumberingIcon: React.FC<Props> = ({ number }) => {
  return (
    <div
      className={
        "m-2 h-8 w-8  rounded-md border-2 border-solid  bg-white text-center md:h-16 md:w-16 md:border-8 " +
        "border-green-400"
      }
    >
      <p className="text-xs leading-none text-black md:text-lg md:leading-none">{"JY"}</p>
      <p className="text-sm leading-none text-black md:text-3xl md:leading-none">{number}</p>
    </div>
  );
};

export default NumberingIcon;
