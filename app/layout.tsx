import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIM BFF",
  description: "Backend-for-Frontend API proxy for BIM SignBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
