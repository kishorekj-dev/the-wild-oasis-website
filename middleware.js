// import { NextResponse } from "next/server";

const { auth } = require("./app/_lib/auth");

// export function middleware({ request }) {
//   return NextResponse.redirect(new URL("/about"), request.URL);
// }

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
