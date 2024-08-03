import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../styles/globals.css";
import "../styles/animations.css";
import { StoreProvider } from "@/store/provider";
import ThemeProvider from "@/styles/theme/provider";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Booknet",
  description: "Booknet test task",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={roboto.className}>{children}</body>
        </html>
      </ThemeProvider>
    </StoreProvider>
  );
}
