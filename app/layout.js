import "@/app/_styles/globals.css";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   display: "swap",
// });

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const raleway = Josefin_Sans({
  subsets: ["latin"],

  display: "swap",
});
export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description:
    "Explore the serene beauty of The Wild Oasis, your gateway to luxury cabins and unforgettable adventures in nature.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body className="bg-primary-950 text-primary-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
