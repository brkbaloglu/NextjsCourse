import { useState } from "react"

export default function DashboardPage(){
    const [name, setName] = useState("")
    return(
        <div>
            <h1>Dashboard Page</h1>            
            <input type="text" name="" value={name} onChange={(e) => setName(e.target.value)} id="" />
            <h1>{name}</h1>
        </div>
    )
}