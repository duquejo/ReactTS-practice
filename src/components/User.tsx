import { useState } from "react"


interface IUser {
    uid: string;
    name: string;
}

export const User = () => {

    const [user, setUser] = useState<IUser>();

    const login = () => {
        setUser({
            uid: 'ABC123',
            name: 'Jose Duque'
        });
    };

    return (
        <div>
            <h3>Usuario: useState</h3>
            <button className="px-5 py-2 shadow rounded bg-indigo-600 font-bold	text-sm hover:bg-indigo-400" onClick={ login }>Login</button>
            {
                user && <pre className="mt-4">{ JSON.stringify( user, null, 3 ) }</pre> 
            }
        </div>
    )
}
