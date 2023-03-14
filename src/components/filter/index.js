import {Box, Button, Heading, HStack, Stack,
        Textarea, Text, useCheckboxGroup, Flex} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';
import { CustomCheckbox } from './CheckBox';

function FilterPosts() {
    const { handleSubmit } = useForm();
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();

    return <Box maxW="600px" mx="auto" py="10">
    <form onSubmit={handleSubmit(console.log("filtering ... jk"))}>
        <HStack justify="space-between">
            <Heading>
                Filter Posts
            </Heading>
            <Button 
            type="submit"
            >
                Filter
            </Button>
        </HStack>
        <Stack>
            <Text>Find posts looking for {value.length > 0 ? value.sort().join(' and ') : "nothing"}
            {value2.length > 0 ? " in " + value2.join(' and ') : ""}</Text>
            <Flex>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housemates' })}/>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housing' })}/>
            </Flex>
            <Flex>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Isla Vista' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'University Housing' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Goleta' })}/>
            </Flex>
        </Stack>
       
    </form>
    
</Box>
}

export default function Dashboard() {
    const {logout} = useLogout();
    const { handleSubmit } = useForm();
    const { goToProfile } = useGoToProfile();
    const id = auth.currentUser.uid;
    
    async function handleLogout() {
        await logout();
    }

    async function handleProfile() {
        await goToProfile(id);
    }

    const{posts, isLoading} = usePosts();

    return (
    <>
        <HStack spacing={"10"}>
            <form onSubmit={handleSubmit(handleLogout)}>
                <Button type="submit" >
                    Sign Out
                </Button>
            </form>
            <form onSubmit={handleSubmit(/*uhhh*/)}>
                <Button type="submit" >
                    Return to Dashboard
                </Button>
            </form>
            <form onSubmit = {handleSubmit(handleProfile)}>
                <Button type="submit">
                    Profile
                </Button>
            </form>
        </HStack>
        {posting
        ? <NewPost />
        : <FilterPosts />}
        {isLoading
        ? <Text>Posts are loading ...</Text>
        : <PostsLists posts={posts}/>}
        
    </>
    )

}
