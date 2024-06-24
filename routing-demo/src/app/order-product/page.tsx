"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function OrderProduct() {

    const router = useRouter()

    const handleClick = () => {
        console.log("Placing order...");
        router.push("/")
    }

  return (
    <div>
        <h1>Order product</h1>
        <button onClick={handleClick}>Place order</button>
    </div>
  )
}

export default OrderProduct