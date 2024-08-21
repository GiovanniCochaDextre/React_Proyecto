import {Flex, Text} from '@chakra-ui/react'
import { FaCartPlus } from "react-icons/fa";

const CartWidget = () => {
    return (
        <Flex alignItems={'center'} height={'100%'} justifyContent={'center'} width={100}>
            <FaCartPlus size={35} color="yellow"/>
            <Text fontSize={20} marginLeft={3}>0</Text>
        </Flex>
    )
}

export default CartWidget;