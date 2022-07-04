type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Container;
