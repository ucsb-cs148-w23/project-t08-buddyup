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

    console.log("on profile page, next up, name:")
    const uid = auth.currentUser.uid;
    const name = auth.currentUser.displayName;
    console.log(name);
    console.log("above should be a name")
    const { handleSubmit } = useForm();

    const { posts, isLoading: postsAreLoading } = usePosts(uid);
    const { user, isLoading: userIsLoading } = useUser(uid);

    const { goToDashboard, loading } = useGoToDashboard();


    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    return (
        <Stack spacing="5">
            <Flex p={["4","6"]} pos="relative" align="center" backgroundColor={"purple.200"}>
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
                            {name}
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            3rd Year
                        </Text>
                        <Text color="gray.800" fontSize={["sm","lg"]}>
                            Wants to Live in IV
                        </Text>
                    </HStack>
                </Stack>

                <form onSubmit = {handleSubmit(handleDashboard)}>
                    <Button type="submit">
                        Dashboard
                    </Button>
                </form>
                <form onSubmit = {handleSubmit(handleEdit)}>
                    <Button type="submit">
                        Edit Profile
                    </Button>
                </form>
            </Flex>
            <Divider />
            { postsAreLoading 
                ? <Text>Posts are loading ...</Text> 
                : <PostsLists posts={posts} />
            }   
        </Stack>
     )
 };