import "./globals.css";
import Navbar from "@/components/Navbar";
// for title you will have to change here
export const metadata = {
  title: "CodeGuild | Your all in one Coding Portfolio", 
  description: "Track and improve your coding journey",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
