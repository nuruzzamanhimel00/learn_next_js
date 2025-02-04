'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Styles from '../../assets/style.module.css'
export default function AuthLayout({ children }) {
    const pathname = usePathname()
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
        <div>
        {children}
        </div>
    </section>
  }