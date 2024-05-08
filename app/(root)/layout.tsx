export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        {/* SIDEBAR */}
        <div>sidebar</div>
        { children }
    </main>
  );
}
