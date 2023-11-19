import React from 'react'
import { Card, Stack, CardBody, CardFooter, ButtonGroup, Divider, Heading, Button, Text, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Item = ({id,nombre,precio}) => {
    return (
        <div>
            <Card maxW='sm' m='5'>
                <CardBody>
                    <Image
                        src='https://media.istockphoto.com/id/1277087911/es/vector/set-de-iconos-de-l%C3%ADnea-plana-de-punto-crochet-bufanda-hecha-a-mano-bola-de-lana-hilo-e.jpg?s=612x612&w=0&k=20&c=W7Cxlt6RIRzBqHg-MSjVYZBEW_5SeHlEdQmhPQfadIY='
                        
                        alt='Producto'
                        borderRadius='md'
                        boxSize='auto'
                        mx='auto'
                        mt='4'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{nombre}</Heading>
                        <Text color='blue.600' fontSize='2xl'>
                            ${precio}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing='2'>
                        <Link to={'/cart'}>
                            <Button variant='solid' colorScheme='blue'>
                                Agregar al carrito
                            </Button>
                        </Link>
                        <Link to={`/item/${id}`}>
                            <Button variant='ghost' colorScheme='blue'>
                                Detalles
                            </Button>
                        </Link>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Item