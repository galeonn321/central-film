import { View, Text } from 'react-native';
import React from 'react';
import { Box, Heading, Input, InputField } from '@gluestack-ui/themed';

const SearchContent = () => {



    return (
        <Box bgColor="$black">
            <Heading
                color="#fff"
                textAlign="center"
                p={"$2"}
                fontWeight="$extrabold"
                fontSize={"$3xl"}
                mx='$24'
            >
                Search and see how good the film is
            </Heading>
            <Input
                bgColor="#707070"
                borderColor="#fff"
                borderWidth={1}
                borderRadius={12}
                mx="$4"
            >
                <InputField color="#fff" placeholder="film, actor, director" />
            </Input>
        </Box>
    )
}

export default SearchContent;