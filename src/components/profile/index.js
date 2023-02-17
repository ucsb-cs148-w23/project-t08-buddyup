import { Button, Divider, Flex, HStack, Stack, Text, Image, Box } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { useParams } from "react-router-dom";
import { usePosts } from "hooks/posts";
import { useUser } from "hooks/users";
import { useGoToDashboard } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

 export default function Profile() {
    const { id } = useParams();
    const { posts, isLoading: postsAreLoading } = usePosts(id);
    const { user, isLoading: userIsLoading } = useUser(id);

    const { handleSubmit } = useForm();
    const { goToDashboard, loading } = useGoToDashboard();

    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    if(userIsLoading) return "Loading...";

    return (
        <Stack spacing="5">
            <Flex p={["4","6"]} pos="relative" align="center" backgroundColor={"purple.200"}>
                <Image 
                    boxSize={"75px"}
                    borderRadius="full"
                    src= { userIsLoading
                        ? "https://media.tenor.com/1xCNcwOcel4AAAAd/obama-obunga.gif"
                        : user.pfpURL}
                >
                </Image>
                <Stack ml="10">
                    <HStack spacing="10" >
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            { userIsLoading
                                ? "Name"
                                : user.name}
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            { userIsLoading
                                ? "Year"
                                : user.year}
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                        Wants to Live in { userIsLoading
                                            ? "Nowhere"
                                            : user.wantstoLive}
                        </Text>
                        <form onSubmit = {handleSubmit(handleDashboard)}>
                            <Button type="submit">
                                Dashboard
                            </Button>
                        </form>
                    </HStack>
                </Stack>

            </Flex>
            <Divider />
            { postsAreLoading 
                ? <Text>Posts are loading ...</Text> 
                : <PostsLists posts={posts} />
            }   
        </Stack>
     )
 };