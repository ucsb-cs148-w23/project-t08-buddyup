import { Button, VStack, HStack, Text, Image, Textarea, Stack, Heading, Box, ChakraProvider} from "@chakra-ui/react"
import { useUser, useSaveProfile, useGoToProfile, useGoToDashboard} from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";
import { useParams } from "react-router-dom";
import theme from "components/theme";

export default function ProfileEdit() {
    const { id } = useParams();
    const uid = auth.currentUser ? auth.currentUser.uid : null;
    const { register, handleSubmit } = useForm();

    const { goToDashboard } = useGoToDashboard();

    const { user, isLoading: userIsLoading } = useUser(id);
    const { saveProfile } = useSaveProfile();
    const { goToProfile } = useGoToProfile();

    async function handleDashboard() {
        console.log("going to dashboard");
        await goToDashboard();
    }

    function handleSaveProfile(data){
        saveProfile(
            data.name,
            auth.currentUser.email,
            data.pfpURL,
            data.bio,
            data.year,
            data.location,
            data.pronouns,
            data.roomtype
        );
        goToProfile(id);
    }

    function handleCancel(){
        goToProfile(id);
    }

    if(!auth.currentUser) return "Loading..."
    return (
        userIsLoading
        ? <Text></Text>
        : <ChakraProvider theme={theme}>
        <Stack spacing = "1px">
            <Heading size="2xl" pb="30px" textAlign="center" color="#264143">
                Buddy Up
            </Heading>

            <Box>
                <form onSubmit = {handleSubmit(handleDashboard)}>
                    <Button type="submit" ml="50px" mb="20px">
                        Return to Dashboard
                    </Button>
                </form>
            </Box>

        <HStack align="center" backgroundColor="#CCE6EC" pb="100px">
            <Image 
                ml="20px"
                boxSize={"80px"}
                borderRadius="full"
                src= { userIsLoading
                    ? "https://freesvg.org/img/abstract-user-flat-4.png"
                    : user.pfpURL}
            />
            <VStack pl="20px" spacing="3" width="30%">
                <Text color="gray.800" fontWeight="bold" fontSize="17px" pt="25px">
                    Display Name:
                </Text>
                <Textarea 
                borderColor="teal"
                fontSize="15px"
                width="250px"
                resize="none" 
                minRows={1}
                placeholder="What name would you like to display?"
                maxLength={70}
                {...register("name", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.name}
                </Textarea>
                <Text color="gray.800" fontWeight="bold" fontSize="17px">
                    School Quarter/Year:
                </Text>
                <Textarea 
                width="250px"
                borderColor="teal"
                fontSize="15px"
                resize="none" 
                placeholder="If it's summer, the year you will be in the fall."
                minRows={1}
                maxLength={20}
                {...register("year", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.year}
                </Textarea>
                <Text color="gray.800" fontWeight="bold" fontSize="17px">
                    Housing Preference:
                </Text>
                <Textarea 
                borderColor="teal"
                width="250px"
                fontSize="15px"
                resize="none" 
                placeholder="Isla Vista, university housing, etc."
                minRows={1}
                maxLength={32}
                {...register("location", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.wantstoLive}</Textarea>
                <Text color="gray.800" fontWeight="bold" fontSize="17px">
                    Profile Picture URL:
                </Text>
                <Textarea 
                borderColor="teal"
                fontSize="15px"
                resize="none" 
                height="125px"
                placeholder="Enter a photo's image address to upload a profile photo."
                minRows={1}
                {...register("pfpURL", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.pfpURL}</Textarea>
            </VStack>
            <VStack spacing="3" width="50%">
                <Text color="gray.800" fontWeight="bold" fontSize="17px" pt="13px">
                    Pronouns:
                </Text>
                <Textarea 
                borderColor="teal"
                fontSize="15px"
                resize="none" 
                placeholder="Your pronouns."
                minRows={1}
                width="50%"
                maxLength={20}
                {...register("pronouns", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.pronouns}
                </Textarea>
                <Text color="gray.800" fontWeight="bold" fontSize="17px">
                    Room Type:
                </Text>
                <Textarea 
                borderColor="teal"
                fontSize="15px"
                resize="none" 
                placeholder="Single, double, etc."
                minRows={1}
                width="50%"
                maxLength={20}
                {...register("roomtype", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.roomtype}
                </Textarea>
                <Text color="gray.800" fontWeight="bold" fontSize="17px">
                    Bio:
                </Text>
                <Textarea 
                borderColor="teal"
                fontSize="15px"
                resize="vertical"
                placeholder="Write a short bio about yourself. What should potential housemates know about you?"
                height="250px"
                width="350px"
                maxLength={600}
                {...register("bio", {required: true})}
                >{ userIsLoading
                    ? ""
                    : user.bio
                    }
                </Textarea>
            </VStack>
            <VStack spacing="8" pr="20px">
                <form onSubmit = {handleSubmit(handleSaveProfile)}>
                    <Button type="submit">
                        Save
                    </Button>
                </form>
                <form onSubmit = {handleSubmit(handleCancel)}>
                    <Button type="submit">
                        Cancel
                    </Button>
                </form>
            </VStack>
        </HStack>
    
        </Stack>
        </ChakraProvider>
    )
};