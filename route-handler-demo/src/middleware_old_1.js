import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const response = NextResponse.next()
  let cookie = request.cookies.get('theme')
  // console.log('cookie', cookie)
  if(!cookie){
    response.cookies.set('theme', 'black')
  }
  if(request.nextUrl.pathname === '/profile') { // If the user is on the profile page, redirect them to the home page
    return NextResponse.redirect(new URL('/home', request.url))
  }

  return response;
  // return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/profile',
// }