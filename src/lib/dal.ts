import { db } from '@/db';
import { getSession } from './auth';
import { eq } from 'drizzle-orm';
import { cache } from 'react';
import { issues, users } from '@/db/schema';
import { mockDelay } from './utils';

// Get user by email
export async function getUserByEmail(email: string) {
  try {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user.length > 0 ? user[0] : null;
  } catch (error) {
    console.error('Error fetching user by email:', error);
    return null;
  }
}

// Get current user from session
export const getCurrentUser = cache(async () => {
  try {
    const session = await getSession();
    if (!session?.userId) return null;

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, session.userId));

    return user.length > 0 ? user[0] : null;
  } catch (error) {
    console.error('Error fetching current user:', error);
    return null;
  }
});
