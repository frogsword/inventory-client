import { Item } from "../types/Item";
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button } from '@chakra-ui/react'

interface IProps {
    item: Item
}

export default function ItemCard({ item }: IProps) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{item.name}</Heading>
            </CardHeader>
            <CardBody>
                <Text>Category: {item.category}</Text>
                <Text>Price: {Math.round(item.price * 100) / 100}</Text>
                <Text>Quantity: {item.quantity}</Text>
            </CardBody>
            <CardFooter>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </CardFooter>
        </Card>
    )
}