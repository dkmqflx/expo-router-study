import { comments } from "./index+api";

/**
 * Dynamic API Route for Individual Comment Operations
 *
 * File Naming Convention:
 * - '[id]+api.ts' creates a dynamic route where [id] is a URL parameter
 * - Located at /api/comments/[id]
 *
 * Features:
 * - Implements RESTful operations for individual comments
 * - Supports GET, PATCH, and DELETE methods
 * - Includes error handling for non-existent comments
 *
 * Endpoints:
 * 1. GET /api/comments/:id
 *    - Retrieves a specific comment
 *    - Returns 404 if comment not found
 *
 * 2. PATCH /api/comments/:id
 *    - Updates a specific comment's text
 *    - Requires JSON body: { text: string }
 *    - Returns 404 if comment not found
 *
 * 3. DELETE /api/comments/:id
 *    - Removes a specific comment
 *    - Returns 404 if comment not found
 *
 * Parameters:
 * - id: number (from URL parameter)
 * - request: Request object (for PATCH/DELETE operations)
 */

export async function GET(_request: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(request: Request, { id }: Record<string, string>) {
  const { text } = await request.json();

  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  comment.text = text;

  return Response.json(comment);
}

export async function DELETE(request: Request, { id }: Record<string, string>) {
  const comment = comments.find((comment) => comment.id === parseInt(id));

  if (!comment) {
    return Response.json({ error: "Comment not found" }, { status: 404 });
  }

  comments.splice(comments.indexOf(comment), 1);

  return Response.json({ message: "Comment deleted" });
}
