export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">{children}</main>
    // <div className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <header className="mb-12">
    //     {/* <h1 className="text-3xl font-bold underline">Dashboard</h1> */}
    //   </header>
    //   <footer className="mt-12">
    //     <p className="text-center text-gray-600">
    //       &copy; {new Date().getFullYear()} by Your Name
    //     </p>
    //   </footer>
    // </div>
  );
}
