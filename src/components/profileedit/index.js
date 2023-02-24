import { Button, Divider, Flex, VStack, HStack, Stack, Text, Image, Box, Textarea } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useUser, useSaveProfile, useGoToProfile } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

export default function ProfileEdit() {
    const uid = auth.currentUser.uid;
    const { register, handleSubmit } = useForm();

    const { user, isLoading: userIsLoading } = useUser(uid);
    const { saveProfile } = useSaveProfile();
    const { goToProfile } = useGoToProfile();

    function handleSaveProfile(data){
        console.log(data.name);
        console.log(data.year);
        console.log(data.location);
        saveProfile(
            data.name,
            auth.currentUser.email,
            data.pfpURL,
            data.bio,
            data.year,
            data.location
        );
        goToProfile();
    }

    function handleCancel(){
        goToProfile();
    }

    return (
        userIsLoading
        ? <Text fontSize={"xl"}> Loading . . .</Text>
        :
        <HStack align="center" backgroundColor={"teal.200"}>
            <Image 
                boxSize={"75px"}
                borderRadius="full"
                src= { userIsLoading
                    ? "https://freesvg.org/img/abstract-user-flat-4.png"
                    : user.pfpURL}
            />
            <VStack spacing="3" width="30%">
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Display Name
                </Text>
                <Textarea resize="none" 
                minRows={1}
                placeholder="What name would you like to display?"
                {...register("name", {required: true})}
                >{ userIsLoading
                    ? "Name"
                    : user.name}
                </Textarea>
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    School Year
                </Text>
                <Textarea resize="none" 
                placeholder="Your school year. If it's summer, the year you will be in the fall."
                minRows={1}
                {...register("year", {required: true})}
                >{ userIsLoading
                    ? "Year"
                    : user.year}
                </Textarea>
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Wants to Live:
                </Text>
                <Textarea resize="none" 
                placeholder="Where do you want to live? (IV, University housing, etc.)"
                minRows={1}
                {...register("location", {required: true})}
                >{ userIsLoading
                    ? "Nowhere"
                    : user.wantstoLive}</Textarea>
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Profile Picture URL:
                </Text>
                <Textarea resize="none" 
                height="150px"
                placeholder="A URL that leads to a photo"
                minRows={1}
                {...register("pfpURL", {required: true})}
                >{ userIsLoading
                    ? "https://freesvg.org/img/abstract-user-flat-4.png"
                    : user.pfpURL}</Textarea>
            </VStack>
            <Text color="gray.800" fontSize={["sm","lg"]}>
                Bio:
            </Text>
            <Textarea resize="vertical"
            placeholder="Write a little about yourself. What should potential housemates know about you?"
            width="60%"
            height="200px"
            {...register("bio", {required: true})}
            >{ userIsLoading
                ? "I eat food and breathe air"
                : user.bio
                }
            </Textarea>
            <VStack spacing="10">
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
    )
};