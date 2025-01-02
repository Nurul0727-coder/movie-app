
import { useState, useEffect } from "react";
import { Section } from "./_components/Section";


export const API_KEY = '418444f63e91598e30524e497f42d95c';


export default function Home() {

  return (
    <div>
      {/* <Header /> */}
      <Section title="Popular" endpoint={'popular'} />
      <Section title="Upcoming" endpoint={"upcoming"} />
      <Section title="Top rated" endpoint={"top_rated"} />
    </div>
  );
}
