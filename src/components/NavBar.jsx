import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Circle, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <Flex>
                <Link to={'/'}>
                    <Box ml={8} mt={2} mb={2} >
                        <Image
                            borderRadius='full'
                            boxSize='45px'
                            src="./src/assets/images/logo.jpg" alt="logo"
                        />
                        <h6>Home</h6>
                    </Box>
                </Link>
                <Spacer />
                <Box mt={5} >
                    <Menu>
                        <MenuButton>
                            <Text fontSize='2xl'>
                                Categorias
                            </Text>
                        </MenuButton>
                        <MenuList>
                            <MenuItem><NavLink to='categoria/A'> categoria A</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/B'>categoria B</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/C'>categoria C</NavLink></MenuItem>
                            <MenuItem><NavLink to='categoria/D'>categoria D</NavLink></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Circle size='60px' bg='black' color='white' mr={8} mt={2}>
                    <CartWidget />
                </Circle>
            </Flex>


        </div>
    )
}

export default NavBar