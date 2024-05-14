import { AuthInfo } from "../types/AuthInfo";

interface IProps {
    authInfo: AuthInfo
}

export default function Home({authInfo}: IProps) {
    console.log(authInfo.isAuthenticated)
    return (
        <>
            {authInfo.isAuthenticated ? 'Authenticated!' : 'NOT Authenticated.'}
        </>
    )
}