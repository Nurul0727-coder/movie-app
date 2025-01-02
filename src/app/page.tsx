// import Image from "next/image";
// import { Section } from "./components/section";
// import { Header } from "./components/header";

// export const API_KEY = 'f39690f9830ce804b7894ac1def4f7e9';
// export default function Home() {
//       <Section title='Popular' endpoint="popular"/>
//       <Section title='Upcoming' endpoint="upcoming"/>
//       <Section title='Top rated' endpoint="top_rated"/>
//     </div>
//   )
// }
import { Section } from "./components/section";
import { Header } from "./components/header";

export const API_KEY = '418444f63e91598e30524e497f42d95c';

export default function Home() {
  return (
    <div>
      <Section title="Popular" endpoint="popular" />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Top rated" endpoint="top_rated" />
    </div>
  );
}
