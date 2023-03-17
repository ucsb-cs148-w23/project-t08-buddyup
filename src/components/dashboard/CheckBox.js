import {Box, Text, Flex, chakra, useCheckbox} from '@chakra-ui/react';


export function CustomCheckbox(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
    useCheckbox(props)

    return (
    <chakra.label
        display='flex'
        flexDirection='row'
        alignItems='center'
        gridColumnGap={2}
        maxW='40'
        bg='gray.100'
        border='1px solid'
        borderColor='teal.300'
        rounded='lg'
        px={3}
        py={1}
        cursor='pointer'
        {...htmlProps}
    >
        <input {...getInputProps()} hidden />
        <Flex
        alignItems='center'
        justifyContent='center'
        border='2px solid'
        borderColor='teal.500'
        w={4}
        h={4}
        {...getCheckboxProps()}
        >
        {state.isChecked && <Box w={2} h={2} bg='pink.200' />}
        </Flex>
        <Text color="gray.700" {...getLabelProps()}>{props.value}</Text>
    </chakra.label>
    )
}
