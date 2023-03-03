import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text,pref,title } = post;

  return (
    <Box p="2" maxW="600px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="2" minH="100px">
          <Text wordBreak="break-word" fontSize="lg" fontWeight='bold'>
            {title}
          </Text>
          <Text wordBreak="break-word" fontSize="sm" fontStyle={"italic"}>
            Housing preference: {pref}
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