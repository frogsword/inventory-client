import ItemCard from "../components/ItemCard";
import { AuthInfo } from "../types/AuthInfo";
import { Item } from "../types/Item";
import { SimpleGrid } from "@chakra-ui/react";

interface IProps {
    authInfo: AuthInfo,
    items: Item[]
}

export default function Home({authInfo, items}: IProps) {
    return (
        <>
            {authInfo.isAuthenticated ? 'Authenticated!' : 'NOT Authenticated.'}

            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            {items.map((item) => {
                return <ItemCard item={item} />
            })}
            </SimpleGrid>
        </>
    )
}