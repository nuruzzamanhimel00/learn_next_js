'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Styles from '../../assets/style.module.css'
import {useState} from 'react'
export default function AuthLayout({ children }) {
    const pathname = usePathname()
    const [input, setInput] = useState('')
    console.log('pathname',pathname)
    const navLinks = [
        { label: 'Login', href: '/login' },
        { label: 'Register', href: '/register' },
        { label: 'Forget Passowrd', href: '/forget-password' },
    ]
    return <section>
        <ol>
            {navLinks.map((link) => (
                <li key={link.href} className={pathname.startsWith(link.href) ? `${Styles.active}` : ''}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}
        </ol>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <div>
        {children}
        </div>
    </section>
  }