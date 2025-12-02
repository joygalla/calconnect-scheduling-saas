import "./globals.css";

export const metadata = {
  title: "CalConnect",
  description: "Booking Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#f8f8ff",
          fontFamily: "system-ui",
        }}
      >
        {children}
      </body>
    </html>
  );
}