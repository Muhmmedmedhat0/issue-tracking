'use server';

import { db } from '@/db';
import { issues } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/dal';
import { z } from 'zod';
import { mockDelay } from '@/lib/utils';

// Define Zod schema for issue validation
const IssueSchema = z.object({
  title: z
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),

  description: z.string().optional().nullable(),

  status: z.enum(['backlog', 'todo', 'in_progress', 'done']),

  priority: z.enum(['low', 'medium', 'high']),
  userId: z.string().min(1, 'User ID is required'),
});

export type IssueData = z.infer<typeof IssueSchema>;

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
};

// Delete an issue
export async function deleteIssue(id: number): Promise<ActionResponse> {
  try {
    await mockDelay(500);

    const user = await getCurrentUser();
    if (!user) {
      return {
        success: false,
        message: 'Unauthorized',
        error: 'You must be logged in to delete issues',
      };
    }

    // Delete the issue
    await db.delete(issues).where(eq(issues.id, id));

    return {
      success: true,
      message: 'Issue deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting issue:', error);
    return {
      success: false,
      message: 'Failed to delete issue',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
