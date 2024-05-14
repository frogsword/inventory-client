import { useEffect, useState } from "react"
import Home from "./pages/Home"
import { AuthInfo } from "./types/AuthInfo"

function App() {
    const defaultAuthInfo: AuthInfo = {
        isAuthenticated: false
    }
    const [loading, setLoading] = useState(true)
    const [authInfo, setAuthInfo] = useState(defaultAuthInfo)

    const fetchData = async() => {
        const response = await fetch('https://localhost:7193/api/auth/authenticate', {
            method: 'get',
            mode: 'cors',
            credentials: 'include'
        })
        const res: AuthInfo = await response.json()

        setAuthInfo(res)
        setLoading(false)

        return res
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            {loading && (
                <div>loading...</div>
            )}
            {!loading && (
                <Home authInfo={authInfo} />
            )}
        </>
    )
}

export default App
