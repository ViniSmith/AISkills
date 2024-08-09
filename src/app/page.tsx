"use client";

import { HomeSection } from '../components/organisms/HomeSection';
import { ThemeProvider } from "next-themes";

export default function Home() {

  return (
      <main className="bg-img_bg bg-no-repeat bg-center bg-cover w-full h-[100vh] ${theme}">
        <HomeSection />
      </main>
  );
}
