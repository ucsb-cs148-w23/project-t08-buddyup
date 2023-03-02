import {Box, Button, Heading, HStack, Textarea, Text} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { useLogout } from "hooks/auth";
import { useGoToProfile } from 'hooks/users';
import { auth } from 'firebase_setup/firebase';

export default function Information() {
    return <Box maxW="600px" mx="auto" py="10">
        <Text>
            hey
        </Text>
        </Box>
}