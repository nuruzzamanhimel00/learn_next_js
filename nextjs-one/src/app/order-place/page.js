'use client'
 
import { useRouter } from 'next/navigation'
import React from 'react'
export default function OrderPlace(){
    const router = useRouter()
    const orderPlaceHandler = () =>{
        router.push('/')
    }
    return (
        <>
            <h1>Place Order </h1>
            <a href="#" onClick={orderPlaceHandler}>Order place btn</a>
        </>
    )
}