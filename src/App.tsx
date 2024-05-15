import { useEffect, useState } from "react"
import Home from "./pages/Home"
import { AuthInfo } from "./types/AuthInfo"
import { Item } from "./types/Item"

function App() {
    const defaultAuthInfo: AuthInfo = {
        isAuthenticated: false
    }
    const defaultItemInfo: Item[] = []

    const [loading, setLoading] = useState(true)
    const [authInfo, setAuthInfo] = useState(defaultAuthInfo)
    const [items, setItems] = useState(defaultItemInfo)

    const fetchAuthData = async() => {
        const response = await fetch('https://localhost:7193/api/auth/authenticate', {
            method: 'get',
            mode: 'cors',
            credentials: 'include'
        })
        const res: AuthInfo = await response.json()

        setAuthInfo(res)

        return res
    }

    const fetchItemData = async() => {
        const response = await fetch('https://localhost:7193/api/items', {
            method: 'get',
            mode: 'cors',
            credentials: 'include'
        })
        const res: Item[] = await response.json()

        setItems(res)
        setLoading(false)

        return res
    }

    useEffect(() => {
        fetchAuthData()
        fetchItemData()
    }, [])

    return (
        <>
            {loading && (
                <div>loading...</div>
            )}
            {!loading && (
                <Home authInfo={authInfo} items={items} />
            )}
        </>
    )
}

export default App
