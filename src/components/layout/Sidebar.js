import { Box } from "@chakra-ui/react";

export default function Sidebar() {
    return (
        <Box
        px="6"
        height="100vh"
        w="100%"
        maxW="300px"
        borderLeft="1px solid"
        borderLeftColor="teal.100"
        position="sticky"
        top="16"
        display={{ base: "none", md: "block" }}
        bg="red"
        ></Box>
    );
}