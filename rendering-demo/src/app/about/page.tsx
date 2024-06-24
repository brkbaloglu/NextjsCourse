import { cookies } from "next/headers";

export default function AboutPage(){
    console.log("About server");

    const cookieStore = cookies()
    const theme = cookieStore.get("theme")
    console.log(theme);
    
    return (
        <div>
        {new Date().toLocaleTimeString()}
        </div>
    )
    
}