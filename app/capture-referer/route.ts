import { NextRequest, NextResponse } from "next/server";
import { storeReferer, generateSessionId } from "@/utils/refererMemory";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const referer = request.headers.get("referer") || "Unknown";
  const sessionId = generateSessionId();

  console.log("Captured Referer:", referer);

  // Store the referer with a unique session ID
  storeReferer(sessionId, referer);

  // Redirect to the complete page with the session ID as a query parameter
  const redirectUrl = `http://localhost:3000/complete?sessionId=${sessionId}`;
  return NextResponse.redirect(redirectUrl);
}
