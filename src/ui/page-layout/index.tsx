import { Header } from "@/ui/header";
import { Page } from "@/ui/page";

type Props = {
  children?: React.ReactNode;
};

export function PageLayout({ children }: Props) {
  return (
    <div className="dark:bg-black-900 bg-yellow-100 flex h-full min-h-screen w-full flex-col">
      <Header />
      <Page>{children}</Page>
    </div>
  );
}
