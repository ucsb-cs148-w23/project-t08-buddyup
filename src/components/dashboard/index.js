import {Box, Button, Heading, HStack, Stack,
        Textarea, Text, useCheckboxGroup, ChakraProvider, 
        Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon} from '@chakra-ui/react';
import { useForm } from "react-hook-form";
import { useAddPost, usePosts } from 'hooks/posts';
import PostsLists from "components/post/PostsLists"
import { auth } from 'firebase_setup/firebase';

import { CustomCheckbox } from './CheckBox';
import ReactCurvedText from 'react-curved-text';
import theme from "components/theme";
import "@fontsource/alata";

var theTags = [];

function NewPost() {
    const {register, handleSubmit, reset} = useForm();
    const {addPost} = useAddPost();
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();

    function handleAddPost(data) {
        addPost({
            title: data.title,
            text: data.text,
            looking: value.sort().join(' and '),
            location: value2.sort(),
            tags: [value.sort().join(' and '), ...value, ...value2],
        })
        reset();
    }
    theTags = value2;

    return <Box maxW="750px" mx="auto" pt="10px" paddingBottom="15">
    
        
    <form onSubmit={handleSubmit(handleAddPost)}>
        <HStack justify="space-between">
            <ReactCurvedText
                    width={1135}
                    height={40}
                    cx={70}
                    cy={110}
                    rx={85}
                    ry={95}
                    startOffset={79}
                    reversed={true}
                    text="Get Started!"
                    textProps={{ style: { fontSize: 22, fontWeight:'800', textAlign:"center" } }}
                    textPathProps={{ fill: "#2C7A7B"}}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
            />
        </HStack>
        <Textarea 
        bg="white"
        minH="unset"
        fontSize='15px'
        resize="none" 
        mt="2" 
        placeholder="Title your post"
        height={"40px"}
        minRows={1}
        {...register("title")}
        />
        <Stack>
            <Text pt="10px" fontSize='15px' >You are looking for {value.length > 0 ? value.sort().join(' and ') : "..."}
            {value2.length > 0 ? " in " + value2.join(' and ') : ""}</Text>
            <HStack spacing="10px" fontSize='15px'>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housemate(s)' })}/>
                <CustomCheckbox {...getCheckboxProps({ value: 'Housing' })}/>
            </HStack>
            <HStack spacing="10px" fontSize='15px' pb = "12px">
                <CustomCheckbox {...getCheckboxProps2({ value: 'University Housing' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Isla Vista' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Goleta' })}/>
                <CustomCheckbox {...getCheckboxProps2({ value: 'Downtown SB' })}/>
            </HStack>
        </Stack>
        <Textarea 
        bg="white"
        fontSize='15px'
        placeholder="What are you looking for?"
        minRows={3}
        {...register("text")}
        />

        <Button 
            mt="20px"
            type="submit"
            colorScheme="pink"
            >
                Post
        </Button>
       
    </form>
    
</Box>
}


export default function Dashboard() {
    const { value, getCheckboxProps } = useCheckboxGroup();
    const { value:value2, getCheckboxProps:getCheckboxProps2 } = useCheckboxGroup();
    const id = auth.currentUser ? auth.currentUser.uid : null;
    


    const{posts, isLoading} = usePosts(null, [value.sort().join(' and '), ...value, ...value2]);
    if(!(auth.currentUser)) return "Loading..."
    return (
    <>
        <ChakraProvider theme={theme}>
        <Heading size="2xl" textAlign="center" color="#264143">
            Buddy Up
        </Heading>

        <NewPost />
        <Box px="20" align="left" pt="10px">
                <Accordion allowToggle rounded='lg' bg='gray.100' borderWidth="1px" borderLeftWidth="2px" borderRightWidth="2px" borderColor="teal.300">
                    <AccordionItem>
                        <h2>
                        <AccordionButton>
                            <Box as="span"  flex='1' textAlign='left'>
                                Filter Posts
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        </h2>
                        <AccordionPanel>
                                <HStack align="center" spacing="10px" fontSize='11px'>
                                    <CustomCheckbox {...getCheckboxProps({ value: 'Housemate(s)' })}/>
                                    <CustomCheckbox {...getCheckboxProps({ value: 'Housing' })}/>
                                    <CustomCheckbox {...getCheckboxProps2({ value: 'University Housing' })}/>
                                    <CustomCheckbox {...getCheckboxProps2({ value: 'Isla Vista' })}/>
                                    <CustomCheckbox {...getCheckboxProps2({ value: 'Goleta' })}/>
                                    <CustomCheckbox {...getCheckboxProps2({ value: 'Downtown SB' })}/>
                                </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        {isLoading
        ? <Text> </Text>
        : <PostsLists posts={posts}/>}
        </ChakraProvider>
    </>
    )

}
