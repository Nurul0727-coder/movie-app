// import type {MetaData} from'next';
// import{Geist,Geist_Mono} from 'next/font/google';
// import'./globals.css';
// import{Footer} from './_components/Footer';
// import { CardDescription } from './ui/card';

// const geistSans=Geist({
//     variable:'--font--geist--sans',
//     subsets:['latin'],
// });
// const  geistMono=Geist_Mono({
//     variable:'--font--geist--mono',
//     subsets:['latin'],
// });
// export const metdata:MetaData={
//     title:'Movie App',
//     description:'Looktv',
// };
// export default function RootLayout({
//     children,
// }Readonly<{
//     children: React.ReactNode;
// }>) 
// app/layout.tsx
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="light">
//       <body className="font-sans antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }

    // app/layout.tsx
// import { Header } from "@/components/Header";
// import { Footer } from "@/components/Footer";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="light">
//       <body className="font-sans antialiased">
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
// app/layout.tsx (RootLayout)
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header /> {/* Header */}
        <main>{children}</main> {/* Page content */}
        <Footer /> {/* Footer */}
      </body>
    </html>
  );
}
