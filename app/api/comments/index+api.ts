/**
 * Comments API Route and Data Store
 *
 * File Naming Convention:
 * - 'index+api.ts' creates the main API route for comments
 * - Located at /api/comments/
 *
 * Features:
 * - Implements main RESTful operations for comments collection
 * - Provides in-memory data store for comments
 * - Supports GET (list) and POST (create) operations
 *
 * Data Structure:
 * - comments: Array of comment objects
 * - Each comment has: { id: number, text: string }
 *
 * Endpoints:
 * 1. GET /api/comments
 *    - Lists all comments
 *    - Returns array of comment objects
 *
 * 2. POST /api/comments
 *    - Creates a new comment
 *    - Requires JSON body: { text: string }
 *    - Auto-generates new ID
 *    - Returns created comment with 201 status
 *
 * Note: This is using in-memory storage which resets on server restart
 * In production, replace with a persistent database
 */

export const comments = [
  {
    id: 1,
    text: "This is the first comment",
  },
  {
    id: 2,
    text: "This is the second comment",
  },
  {
    id: 3,
    text: "This is the third comment",
  },
];

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: Request) {
  const { text } = await req.json();

  const newComment = { id: comments.length + 1, text };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}
