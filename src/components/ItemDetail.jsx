import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Text, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({nombre, precio}) => {
    return (
        <div>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <Image
                        src='https://media.istockphoto.com/id/1277087911/es/vector/set-de-iconos-de-l%C3%ADnea-plana-de-punto-crochet-bufanda-hecha-a-mano-bola-de-lana-hilo-e.jpg?s=612x612&w=0&k=20&c=W7Cxlt6RIRzBqHg-MSjVYZBEW_5SeHlEdQmhPQfadIY='
                        alt='Producto'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, assumenda. Labore ipsam rem nemo officia repellendus architecto? Quas rerum reiciendis possimus quis facilis, suscipit debitis. Blanditiis, impedit. Ab, optio veniam.
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <ItemCount/>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ItemDetail