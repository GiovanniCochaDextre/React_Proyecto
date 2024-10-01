import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react'
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { cartState } = useContext(CartContext);

    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Link to="/checkout">
        <Flex 
            alignItems={'center'} 
            height={'100%'} 
            justifyContent={'center'} 
            width={100}
        >
            <FaCartPlus size={35} color="yellow"/>
            <Text fontSize={20} marginLeft={3}>{qtyTotalItems}</Text>
            
        </Flex>

        </Link>

    );
};

