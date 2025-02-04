import React from "react";
import PrivateFolder from "./_lib/page";
import Link from 'next/link'
// import { useRouter } from 'next/navigation'

export default function Home(){

  return (
    <>
      <h1>Home</h1>
      <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
      <PrivateFolder />
      <Link href="/blog">Blog Page Button</Link>
      <hr/>
      <Link href="/products">Products Page Button</Link>
      <hr/>
    
    </>
  )
}