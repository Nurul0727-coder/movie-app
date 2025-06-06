"use client";
import { Section } from "./_components/Section";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";
import { HeroMovie } from "./_components/HeroMovie";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroMovie />
      <Section title="Popular" endpoint={"popular"} />
      <Section title="Upcoming" endpoint={"upcoming"} />
      <Section title="Top rated" endpoint={"top_rated"} />
      <Footer />
    </div>
  );
}
