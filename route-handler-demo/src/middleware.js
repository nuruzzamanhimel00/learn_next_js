import { NextResponse } from 'next/server'
 
export function middleware(request) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-hello-from-middleware1', 'hello')
 
  // You can also set request headers in NextResponse.next
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })

  let cookie = request.cookies.get('theme')
  // console.log('cookie', cookie)
  if(!cookie){
    response.cookies.set('theme', 'black')
  }
 
  // Set a new response header `x-hello-from-middleware2`
  response.headers.set('x-hello-from-middleware2', 'hello2')
  response.headers.set('custom-headder','custom-value')

  return response
}