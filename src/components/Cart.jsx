import React from 'react'
import { Box, Text, VStack, Button } from '@chakra-ui/react';

const Cart = () => {
    const cartItems = [
        { id: 1, name: 'Camiseta Roja', quantity: 2, price: 20 },
        { id: 2, name: 'Pantalones Azules', quantity: 1, price: 35 },
        { id: 3, name: 'Zapatillas Negras', quantity: 1, price: 48 },
        
    ];

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    };

    return (
        <Box p={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
                Carrito de compras
            </Text>
            <VStack align="start" spacing={4}>
                {cartItems.map((item) => (
                    <Box key={item.id} border="1px" p={3} borderRadius="md">
                        <Text>{item.name}</Text>
                        <Text>Cantidad: {item.quantity}</Text>
                        <Text>Precio unitario: ${item.price}</Text>
                        <Text>Subtotal: ${item.quantity * item.price}</Text>
                        <Button variant="outline" size="sm">
                            Eliminar
                        </Button>
                    </Box>
                ))}
            </VStack>
            <Box mt={4}>
                <Text fontSize="lg" fontWeight="bold">
                    Total: ${getTotalPrice()}
                </Text>
                <Button colorScheme="blue" mt={4}>
                    Realizar compra
                </Button>
            </Box>
        </Box>
    );
};
export default Cart