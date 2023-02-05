import { Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react"

 export default function Profile() {
     
     return (
        <Stack spacing="5" >
            <Flex p={["4","6"]} pos="relative" align="center" >
                Insert Avatar Here
                <Stack ml="10">
                    @username
                    <HStack spacing="10">
                        <Text>
                            Hello
                        </Text>
                    </HStack>
                </Stack>
            </Flex>
        </Stack>
     )
 }