import { NextRequest, NextResponse } from "next/server";
import { getReferer } from "@/utils/refererMemory";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const sessionId = url.searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Session ID is required." },
      { status: 400 }
    );
  }

  const referer = getReferer(sessionId);

  if (!referer) {
    return NextResponse.json(
      { error: "Referer not found or session expired." },
      { status: 404 }
    );
  }

  return NextResponse.json({ referer });
}
