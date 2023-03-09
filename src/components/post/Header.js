import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
//import Avatar from "components/profile/Avatar";
import { useUser } from "hooks/users";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { DASHBOARD, PROTECTED } from "lib/routes";
// import UsernameButton from "components/profile/UsernameButton";

export default function Header({ post }) {
  const { date, uid } = post;
  const { user, isLoading } = useUser(uid);

  if (isLoading) return "Loading...";

  return (
    <Flex
      alignItems="center"
      borderBottom="2px solid"
      borderColor="teal.100"
      p="3"
      bg="gray.50"
    >
      <Avatar
        as={Link}
        to={user
            ? `${PROTECTED}/profile/${uid}`
            : DASHBOARD}
        name={user
              ? user.name
              : "missing" }
        size="md"
        src={user
              ? user.pfpURL
              : "https://freesvg.org/img/abstract-user-flat-4.png"}
        
      />

      <Box ml="4">
        <Text> {user ? user.name : "Name"} </Text>
        <Text fontSize="sm" color="gray.500">
          {formatDistanceToNow(date)} ago
        </Text>
      </Box>
    </Flex>
  );
}