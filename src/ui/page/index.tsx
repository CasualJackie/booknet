type Props = {
  children?: React.ReactNode;
};

export function Page({ children }: Props) {
  return <main className="ml-[18px] mr-3.5 mt-8">{children}</main>;
}
