//import { IconButton, VStack } from '@chakra-ui/react'
import { useContext } from "react";
import { CartContext } from "../../context";
import {
    Box,
    Flex,
    Image,
    Text,
    Button,
    Heading,
    Divider,
    VStack,
    HStack,
    Spacer,
    Alert,
    AlertIcon,
    IconButton,
} from "@chakra-ui/react";
import {DeleteIcon, AddIcon, MinusIcon} from "@chakra-ui/icons";


export const CartDetails = () => {
    const { cartState, addItem, removeItem, deleteItem } = useContext(CartContext);
    const total = cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);

    const handleCreateOrder = () => {
        console.log("Crear orden");
    };

    const handleDeleteItem = (item) => {
        deleteItem(item);
    };

    return (
        <Box p={6} maxW="800px" mx="auto">
            <Heading as="h2" size="lg" mb={6} textAlign="center">
                Detalles del carrito
            </Heading>

            {cartState.length === 0 ? (
                <Alert status="info" borderRadius="md">
                    <AlertIcon />
                    Tu Carrito está vacío.                   
                </Alert>
            ) : (
                <VStack spacing={4} align="stretch">
                    {cartState.map((item) => (
                        <Flex
                            key={item.id}
                            p={4}
                            borderWidth="1px"
                            borderRadius="md"
                            alignItems="center"
                            boxShadow="sm"
                        >
                            <Image
                                src={item.thumbnail}
                                alt={item.title}
                                boxSize="100px"
                                objectFit="cover"
                                borderRadius="md"
                                mr={4}
                            />

                            <Box flex="1">
                                <Text fontSize="xl" fontWeight="bold">
                                    {item.title}
                                </Text>
                                <HStack spacing={4} mt={2}>
                                    <Text>Precio ${item.price.toFixed(2)}</Text>
                                    <HStact>
                                        <IconButton
                                            aria-label="Disminuir cantidad"
                                            icon={<MinusIcon />}
                                            size="sm"
                                            onClick={() => removeItem(item)}
                                            isDisabled={item.qtyItem === 1}
                                        />
                                        <Text>{item.qtyItem}</Text>
                                        <IconButtom
                                            aria-label="Aumentar cantidad"
                                            icon={<AddIcon/>}
                                            size="sm"
                                            onClick={() => addItem(item)}
                                            isDisabled={item.qtyItem >= item.stok}
                                        />
                                    </HStact>
                                </HStack>
                            </Box>
                            
                            <Spacer />

                            <HStack>
                                <Text fontWeight="bold">
                                    Subtotal: ${(item.price * item.qtyItem).toFixed(2)}
                                </Text>
                                <IconButtom 
                                    aria-label="Eliminar producto"
                                    icon={<DeleteIcon />}
                                    colorScheme="red"
                                    variant="outline"
                                    onClick={() => handleDeleteItem(item)}
                                />
                            </HStack>
                        </Flex>
                    ))}

                    <Divider />

                    <Flex alignItems="center">
                        <Text fontSize="2x1" fontWeight="bold">
                            Total: ${total.ToFixed(2)}
                        </Text>

                        <Spacer />
                        <Button colorScheme="teal" size="lg" onClick={handleCreateOrder}>
                            Crear Orden
                        </Button>
                    </Flex>
                </VStack>
            )}
        </Box>
    );
};