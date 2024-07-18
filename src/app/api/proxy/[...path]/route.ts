import { NextRequest, NextResponse } from "next/server";

async function handler(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  const path = params.path.join("/");
  const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`;

  const headers = new Headers(req.headers);
  headers.set("host", new URL(process.env.NEXT_PUBLIC_API_BASE_URL!).host);

  const response = await fetch(apiUrl, {
    headers,
    method: req.method,
    body: req.body,
  });

  const data = await response.json();

  return NextResponse.json(data);
}

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
};
