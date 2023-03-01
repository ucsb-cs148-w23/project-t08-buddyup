import { Button, VStack, HStack, Text, Image, Textarea } from "@chakra-ui/react"
import { useUser, useSaveProfile, useGoToProfile } from "hooks/users";
import { useForm } from "react-hook-form";
import { auth } from "firebase_setup/firebase";

export default function ProfileEdit() {
    const uid = auth.currentUser.uid;
    const { register, handleSubmit } = useForm();

    const { user, isLoading: userIsLoading } = useUser(uid);
    const { saveProfile } = useSaveProfile();
    const { goToProfile, isLoading:profileLoading } = useGoToProfile();

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
                maxLength={48}
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
                maxLength={20}
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
                maxLength={32}
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
            <VStack spacing="3" width="50%">
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Pronouns:
                </Text>
                <Textarea resize="none" 
                placeholder="Your pronouns. Only if you want to share them."
                minRows={1}
                width="50%"
                maxLength={20}
                {...register("pronouns", {required: true})}
                >{ userIsLoading
                    ? "pronouns"
                    : user.pronouns}
                </Textarea>
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Room Type:
                </Text>
                <Textarea resize="none" 
                placeholder="single, double, etc."
                minRows={1}
                width="50%"
                maxLength={20}
                {...register("roomtype", {required: true})}
                >{ userIsLoading
                    ? "room type"
                    : user.roomtype}
                </Textarea>
                <Text color="gray.800" fontSize={["sm","lg"]}>
                    Bio:
                </Text>
                <Textarea resize="vertical"
                placeholder="Write a little about yourself. What should potential housemates know about you?"
                height="300px"
                maxLength={600}
                {...register("bio", {required: true})}
                >{ userIsLoading
                    ? "I eat food and breathe air"
                    : user.bio
                    }
                </Textarea>
            </VStack>
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