'use client'
import {useState} from 'react'

export default function DashboardPage(){
    const [value, setValue] = useState('')
    console.log('Dashboard Client component')
    return (
        <>
        <h1>This is DashboardPage page</h1>
        <h2>Type: {value}</h2>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}