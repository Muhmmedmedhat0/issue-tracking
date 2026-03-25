import { getCurrentUser } from '@/lib/dal';
import Button from './ui/button';
import Link from 'next/link';

const DashboardButton = async () => {
  const user = await getCurrentUser();
  return (
    <>
      {user ? (
        <Link href="/dashboard" transitionTypes={['fade']}>
          <Button>Go to Dashboard</Button>
        </Link>
      ) : (
        <div className="flex items-center space-x-4">
          <Link href="/signin" transitionTypes={['fade']}>
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link href="/signup" transitionTypes={['fade']}>
            <Button>Sign up</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default DashboardButton;
