import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Link href="/" transitionTypes={['fade']}>
        Home
      </Link>
    </div>
  );
}
