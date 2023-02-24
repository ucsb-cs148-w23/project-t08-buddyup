import { Button, Divider, Flex, HStack, Stack, Text, Image, Box } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { useParams } from "react-router-dom";
import { usePosts } from "hooks/posts";
import { useGoToDashboard, useEditProfile, useUser } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

 export default function Profile() {
    const { id } = useParams();
    const uid = auth.currentUser.uid;
    const isUser = (id == uid) ? true : false;

    const { posts, isLoading: postsAreLoading } = usePosts(id);
    const { user, isLoading: userIsLoading } = useUser(id);

    const { handleSubmit } = useForm();
    const { goToDashboard, loading } = useGoToDashboard();
    const { goToEdit, oading } = useEditProfile();

    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    async function handleEdit() {
        console.log("going to profile edit");
        await goToEdit(uid);
    }

    return (
        <Stack spacing="5">
            <Flex p={["4","6"]} pos="relative" align="center" backgroundColor={"purple.200"}>
                <Image 
                    boxSize={"75px"}
                    borderRadius="full"
                    src= { userIsLoading
                        ? "https://freesvg.org/img/abstract-user-flat-4.png"
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
                    </HStack>
                </Stack>

                <form onSubmit = {handleSubmit(handleDashboard)}>
                    <Button type="submit" ml={"5"}>
                        Dashboard
                    </Button>
                </form>
                {isUser 
                ?   <form onSubmit = {handleSubmit(handleEdit)}>
                        <Button type="submit" ml={"5"}>
                            Edit Profile
                        </Button>
                    </form>
                : <></>
                }
                
            </Flex>
            <Divider />
            { postsAreLoading 
                ? <Text>Posts are loading ...</Text> 
                : <PostsLists posts={posts} />
            }   
        </Stack>
     )
 };