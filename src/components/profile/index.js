import { Button, Divider, Flex, HStack, Stack, Text, Image } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { useParams } from "react-router-dom";
import { usePosts } from "hooks/posts";
import { useGoToDashboard, useEditProfile, useUser } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

 export default function Profile() {
    const { id } = useParams();
    const uid = auth.currentUser.uid;
    const isUser = (id === uid) ? true : false;

    const { posts, isLoading: postsAreLoading } = usePosts(id);
    const { user, isLoading: userIsLoading } = useUser(id);

    const { handleSubmit } = useForm();
    const { goToDashboard } = useGoToDashboard();
    const { goToEdit } = useEditProfile();

    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    async function handleEdit() {
        console.log("going to profile edit");
        await goToEdit(uid);
    }

    return (
        <Stack spacing = "1px">
            <Stack spacing = "5" borderColor="gray.500" backgroundColor={"#B3E0DC"}>
            <Flex p={["4","6"]} pos="relative" align="center">
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
                        <Text color="gray.800" fontSize="17px">
                            { userIsLoading
                                ? "Name"
                                : user.name}
                        </Text>
                        <Text color="gray.800" fontSize="17px">
                            { userIsLoading
                                ? "Year"
                                : user.year}
                        </Text>
                        <Text color="gray.800" fontSize="17px">
                        Wants to Live in { userIsLoading
                                            ? "[Housing]"
                                            : user.wantstoLive}
                        </Text>
                    </HStack>
                </Stack>

                {/* <form onSubmit = {handleSubmit(handleDashboard)}>
                    <Button type="submit" ml={"5"}>
                        Dashboard
                    </Button>
                </form>
                 */}
                {isUser 
                ?   <form onSubmit = {handleSubmit(handleEdit)}>
                        <Button type="submit" ml="130px">
                            Edit Profile
                        </Button>
                    </form>
                : <></>
                }
                
            </Flex>
            <Divider/>
            <Flex p={["4","1"]} pos="relative">
                <Text color="gray.800" fontSize={["sm","lg"]} ml="15px">
                    Pronouns: { userIsLoading
                        ? "Pronouns"
                        : user.pronouns}
                </Text>
                <Text color="gray.800" fontSize={["sm","lg"]} ml="15px">
                    Room Type: { userIsLoading
                        ? "Room Preference"
                        : user.roomtype}
                </Text>
            </Flex>
            <Divider/>
            <Flex p={["4","6"]} pos="relative" align="center">
                <Text verticalAlign={"center"} color="gray.800" fontSize={"xl"}>
                    Bio:
                </Text>
                <Text verticalAlign={"center"} color="gray.800" fontSize={["sm","lg"]} ml="5" mr="5" mb="5">
                    {userIsLoading
                    ? "Bio"
                    : user.bio}
                </Text>
            </Flex>
            </Stack>
            <Divider />

            <Text pt="20px" pl="25px" fontWeight="bold" fontSize="22px" color="teal">Your Posts:</Text>
            
            { postsAreLoading 
                ? <Text>Posts are loading ...</Text> 
                : <PostsLists posts={posts} />
            }   
        </Stack>
     )
 };