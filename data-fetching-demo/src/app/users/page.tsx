import { resolve } from "path"

type User = {
    id: number
    name: string
    username: string
    email: string
    phone: string
}

export default async function UsersPage() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch("http://jsonplaceholder.typicode.com/users")

    const users = await response.json()

    return (
        <div className="grid grid-cols-2 gap-2 p-4">
            {
                users.map((user: User) => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-white ">
                        <div className="flex flex-col space-y-1">
                            <h2 className="text-lg font-semibold">{user.username}</h2>
                            <p className="text-sm">{user.username}</p>
                            <p className="text-sm">{user.email}</p>
                            <p className="text-sm">{user.phone}</p>
                        </div>

                    </div>
                ))
            }
        </div>  
    )
}