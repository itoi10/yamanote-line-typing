type Props = {
  id: string;
};

const NumberingIcon: React.FC<Props> = ({ id }) => {
  return (
    <div className="m-1 h-16 w-16 rounded-md border-8 border-solid border-green-400 bg-white text-center">
      <p className="text-lg leading-none text-black">JY</p>
      <p className="text-3xl leading-none text-black">{id}</p>
    </div>
  );
};

export default NumberingIcon;
