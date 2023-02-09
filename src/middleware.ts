export { default } from 'next-auth/middleware';

export const config = { matcher: ['/app'] };

// // export { default } from "next-auth/middleware";
// import { withAuth } from 'next-auth/middleware';
// import { NextRequest, NextResponse } from 'next/server';

// export default withAuth(
//   // `withAuth` augments your `Request` with the user's token.
//   function middleware(req) {
//     console.log('token: ', req.nextauth.token);

//     if (
//       req.nextUrl.pathname.startsWith('/dashboard') &&
//       req.nextauth.token?.role !== 'admin'
//     )
//       return NextResponse.rewrite(new URL('/auth/login', req.url));
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token
//     }
//   }
// );

// export const config = {
//   matcher: ['/dashboard']
// };

// // import { NextResponse } from 'next/server';
// // import type { NextRequest } from 'next/server';

// // export function middleware(request: NextRequest) {
// //   console.log('lol!!!');
// // }

// // export const config = {
// //   matcher: '/'
// // };
