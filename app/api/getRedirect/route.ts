import { addTask } from "@/utils/taskMemory";
import { NextResponse } from "next/server";

export async function GET(request: Request): Promise<NextResponse> {
  try {
    const url = new URL(request.url);
    const linkId = url.searchParams.get("linkId");

    if (!linkId) {
      return NextResponse.json(
        { error: "Link ID is required." },
        { status: 400 }
      );
    }

    const publisherUrl = "https://rb.gy/dvov4k";
    // const publisherUrl = "https://tinyurl.com/3upbjae8";
    const sessionToken = addTask(linkId, publisherUrl);

    const response = NextResponse.json({ redirectUrl: publisherUrl });
    response.cookies.set("sessionToken", sessionToken, {
      httpOnly: true,
      secure: false, // Use `true` in production (HTTPS)
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
