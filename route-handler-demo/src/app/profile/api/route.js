import { headers, cookies } from 'next/headers'

 
export async function GET(request) {
    // Read incoming headers
    const headersList = headers();
    const authorization = headersList.get('Authorization');
  
    // Log the Authorization header
    console.log('Authorization:', authorization);
  
    // Set cookies in the response
    const cookieStore = cookies();
    const cookieToken = '111233'; // Example token value
  
    // Create the response
    return new Response('<h1>Hello, Next.js!</h1>', {
      status: 200,
      headers: {
        Authorization: authorization || '', // Pass the Authorization header back
        'Content-Type': 'text/html',
        'Set-Cookie': `token=1234; Path=/; HttpOnly, cookie_token=${cookieToken}; Path=/; HttpOnly`, // Combine multiple cookies
      },
    });
  }