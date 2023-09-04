import { View, Text } from 'react-native';
import React from 'react';
import { Box, Heading, Input, InputField, InputIcon } from '@gluestack-ui/themed';
import Icon from "react-native-vector-icons/Ionicons";

const SearchContent = () => {

    //Reciba un texto e investiga en la API de The Movie DB para obtener los resultados de la búsqueda.





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
                borderColor="#000"
                borderWidth={1}
                borderRadius={12}
                mx="$4"
            >
                <InputIcon pl="$3">
                    <Icon name={'search-outline'} size={20} color={"#fff"} />
                </InputIcon>
                <InputField color="#fff" placeholder="film, actor, director" />
            </Input>
        </Box>
    )
}

export default SearchContent;