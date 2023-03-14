import { Box, Text } from "@chakra-ui/react";
import Header from "./Header";
import Actions from "./Actions";

export default function Post({ post }) {
  const { text,looking,location,title } = post;

  return (
    <Box pt = "35px" maxW="750px" textAlign="left">
      <Box border="2px solid" borderColor="gray.100" borderRadius="md">
        <Header post={post} />

        <Box p="10px" minH="100px">
          <Text wordBreak="break-word" fontSize="18px" fontWeight="bold" color="teal" pb = "1px">
            {title}
          </Text>
          <Text wordBreak="break-word" fontSize="14px" fontStyle={"italic"} pb = "25px">
            {looking !== "" 
            ? "Looking for: " + looking + (location !== "" 
                                          ? " in " + location 
                                          : "") 
            // : "Housing related post" + (location !== "" 
            //                             ? " for " + location 
            //                             : "")}
            : ""}
          </Text>
          <Text wordBreak="break-word" fontSize="15px" textIndent={20}>
            {text}
          </Text>

        </Box>

       {<Actions post={post} />}
      </Box>
    </Box>
  );
}