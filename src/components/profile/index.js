import { Button, Divider, Flex, HStack, Stack, Text, Image, Heading } from "@chakra-ui/react"
import PostsLists from "components/post/PostsLists";
import { useParams } from "react-router-dom";
import { usePosts } from "hooks/posts";
import { useGoToDashboard, useEditProfile, useUser } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

export default function Profile() {
    const { id } = useParams();
    const uid = auth.currentUser ? auth.currentUser.uid : null;
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

    if(!auth.currentUser) return "Loading...";
    return (

        <Stack spacing = "1px">
            <Heading size="2xl" pb="30px" textAlign="center" color="teal">
                Buddy Up
            </Heading>

            <Stack spacing = "5" borderColor="gray.500" backgroundColor={"#B3E0DC"}>
            <Flex pt="20px" pl="20px" pos="relative" align="center">
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
                        <Text color="teal" fontWeight="bold" fontSize="22px">
                            { userIsLoading
                                ? "Name"
                                : user.name}
                        </Text>
            
                    </HStack>
                    <HStack spacing="10" >
                        {/* <Text verticalAlign={"center"} color="gray.800" fontWeight="bold" fontSize="17px">
                            Pronouns:
                        </Text> */}
                        <Text color="gray.800" fontSize="15px">
                            { userIsLoading
                            ? "Pronouns"
                            : user.pronouns}
                        </Text>
                        </HStack>
                </Stack>

                {isUser 
                ?   <form onSubmit = {handleSubmit(handleEdit)}>
                        <Button type="submit" ml="450px">
                            Edit Profile
                        </Button>
                    </form>
                : <></>
                }
                
            </Flex>
            <Divider/>
            <Flex pl="25px" pr="4" pos="relative">
                <Text verticalAlign={"center"} color="gray.800" fontWeight="bold" fontSize="17px" pl="20px">
                    Housing Preference:
                </Text>
                <Text color="gray.800" fontSize="15px" ml="15px" pt="2px" pr="90px">
                        { userIsLoading
                        ? "[Housing]"
                        : user.wantstoLive}
                </Text>  
                <Text verticalAlign={"center"} color="gray.800" fontWeight="bold" fontSize="17px">
                    Room Type:
                </Text>
                <Text verticalAlign={"center"} color="gray.800" fontSize="15px" ml="15px" pt="2px" pr="80px">
                    { userIsLoading
                        ? "Room Preference"
                        : user.roomtype}
                </Text>
                <Text verticalAlign={"center"} color="gray.800" fontWeight="bold" fontSize="17px">
                    Quarter/Year:
                </Text>
                <Text color="gray.800" fontSize="15px" ml="15px" pt="2px">
                            { userIsLoading
                                ? "Year"
                                : user.year}
                 </Text> 
            </Flex>
            <Divider/>
            <Flex pl="25px" pr="4" pos="relative" align="center">
                <Text verticalAlign={"center"} color="gray.800" fontWeight="bold" fontSize="17px" pb="20px">
                    Bio:
                </Text>
                <Text verticalAlign={"center"} color="gray.800" fontSize="15px"  ml="5" mr="5" mb="20px">
                    {userIsLoading
                    ? "Bio"
                    : user.bio}
                </Text>
            </Flex>
            </Stack>
            <Divider />

            <HStack spacing="525px" pt="30px">
                <Text pt="20px" pl="25px" fontWeight="bold" fontSize="22px" color="teal">Your Posts:</Text>

                <form onSubmit = {handleSubmit(handleDashboard)}>
                        <Button type="submit" ml={"5"}>
                            Return to Dashboard
                        </Button>
                </form>
            </HStack>

            { postsAreLoading 
                ? <Text>Posts are loading ...</Text> 
                : <PostsLists posts={posts} />
            }   
        </Stack>
     )
 };