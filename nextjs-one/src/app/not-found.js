import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <h1>Custom 404</h1>
      <Link href="/">Return Home</Link>
    </div>
  )
}