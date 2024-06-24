"use client"
import { useEffect } from "react"

export default function LoadingPage({error}: {error: Error}){
    useEffect(() => {
        console.error(`Error: ${error}`);
        
    }, [])
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="text-2xl text-red-500">Error: Fetching users data</div>
        </div>
    )
}