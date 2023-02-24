type Props = {
  children: React.ReactNode;
};

// 画面全体を占めるコンテナ
export default function Container({ children }: Props) {
  return (
    <div className="flex h-screen justify-center bg-gray-100">
      <div className="w-full">{children}</div>
    </div>
  );
}
