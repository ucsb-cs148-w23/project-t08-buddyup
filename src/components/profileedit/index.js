import { Button, VStack, HStack, Text, Image, Textarea, Stack, Heading} from "@chakra-ui/react"
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
        goToProfile(uid);
    }

    function handleCancel(){
        goToProfile(uid);
    }

    return (
        userIsLoading
        ? <Text fontSize={"xl"}> Loading . . .</Text>
        :
        <Stack spacing = "1px">
            <Heading size="2xl" pb="30px" textAlign="center" color="teal">
                Buddy Up
            </Heading>
        <HStack align="center" backgroundColor="#B3E0DC" pb="100px">
            <Image 
                ml="20px"
                boxSize={"80px"}
                borderRadius="full"
                src= { userIsLoading
                    ? "https://freesvg.org/img/abstract-user-flat-4.png"
                    : user.pfpURL}
            />
            <VStack pl="20px" spacing="3" width="30%">
                <Text color="gray.800" fontWeight="bold" fontSize="17px" pt="35px">
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
                    ? "Name"
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
                    ? "Year"
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
                    ? "Nowhere"
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
                    ? "https://freesvg.org/img/abstract-user-flat-4.png"
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
                placeholder="Your pronouns (optional)."
                minRows={1}
                width="50%"
                maxLength={20}
                {...register("pronouns", {required: true})}
                >{ userIsLoading
                    ? "pronouns"
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
                    ? "room type"
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
                    ? "I eat food and breathe air"
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
    )
};