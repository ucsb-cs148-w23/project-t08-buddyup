import { Box, Button, Flex, Input } from "@chakra-ui/react";
import Avatar from "components/profile/Avatar";
import { useAddComment } from "hooks/comments";
import { useForm } from "react-hook-form";

export default function NewComment({ post }) {
  const { id: postID } = post;
  const { register, handleSubmit, reset } = useForm();
  const { addComment, isLoading: commentLoading } = useAddComment({
    postID,
  });

  function handleAddComment(data) {
    addComment(data.text);
    reset();
  }

  return (
    <Box maxW="600px" mx="auto" py="6">
      <Flex padding="4">
        <Box flex="1" ml="4">
          <form onSubmit={handleSubmit(handleAddComment)}>
            <Box>
              <Input
                size="sm"
                variant="flushed"
                placeholder="Write comment..."
                autoComplete="off"
                {...register("text", { required: true })}
              />
            </Box>
            <Flex pt="2">
              <Button
                isLoading={commentLoading}
                type="submit"
                colorScheme="teal"
                size="xs"
                ml="auto"
              >
                Add Comment
              </Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}