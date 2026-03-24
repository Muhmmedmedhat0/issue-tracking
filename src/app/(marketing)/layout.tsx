export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <header className="mb-12">
        <h1 className="text-3xl font-bold underline">Marketing</h1>
      </header>
      <main className="grow">{children}</main>
      <footer className="mt-12">
        <p className="text-center text-gray-600">
          &copy; {new Date().getFullYear()} by Your Name
        </p>
      </footer>
    </div>
  );
}
