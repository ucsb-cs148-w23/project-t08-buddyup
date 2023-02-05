import { Divider, Flex, HStack, Stack, Text, Image, Box } from "@chakra-ui/react"

 export default function Profile() {
     
     return (
        <Stack spacing="5" backgroundColor={"purple.200"}>
            <Flex p={["4","6"]} pos="relative" align="center" >
                <Image 
                    boxSize={"75px"}
                    borderRadius="full"
                    src="https://yt3.ggpht.com/a/AATXAJy3vmY5uYuadYbWkzDZ1n7-2c7IJe5xLJw3GQ=s900-c-k-c0xffffffff-no-rj-mo"
                    alt="Pickle Rick, Alias of Rick Sanchez"
                >
                </Image>
                <Stack ml="10">
                    <HStack spacing="10" >
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            Pickle Rick
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            3rd Year
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            Wants to Live in IV
                        </Text>
                    </HStack>
                </Stack>
            </Flex>
        </Stack>
     )
 };