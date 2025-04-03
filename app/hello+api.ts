/**
 * Basic API Route Example
 *
 * File Naming Convention:
 * - The '+api.ts' suffix indicates this is an API route in Expo Router
 * - This creates an endpoint at '/api/hello'
 *
 * Features:
 * - Simple GET endpoint that returns a JSON response
 * - Demonstrates basic API route setup
 *
 * Usage:
 * - Access via GET /api/hello
 * - Returns: { message: "Hello, world!" }
 */
export async function GET() {
  return Response.json({ message: "Hello, world!" });
}
