import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text,looking,location,title } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="lg" fontWeight='bold'>
            {title}
          </Text>
          <Text wordBreak="break-word" fontSize="sm" fontStyle={"italic"}>
            {looking !== "" 
            ? "Looking for " + looking + (location !== "" 
                                          ? " in " + location 
                                          : "") 
            : "Housing related post" + (location !== "" 
                                        ? " for " + location 
                                        : "")}
          </Text>
          <Text wordBreak="break-word" fontSize="md">
            {text}
          </Text>

        </Box>

       {<Actions post={post} />}
      </Box>
    </Box>
  );
}