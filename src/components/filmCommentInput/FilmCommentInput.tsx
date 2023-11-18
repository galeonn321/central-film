import { Input, InputField, InputIcon, InputSlot, } from '@gluestack-ui/themed'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

const FilmCommentInput = () => {
    return (

        <Input
            bgColor="#707070"
            borderColor="#000"
            borderWidth={1}
            borderRadius={12}
            mx="$2"
            my="$2"
            px="$2"
            py='$11'
        >
            <InputField color="#fff" placeholder="film, actor, director" alignSelf='center' />
            <InputIcon
                mr="$2"
                alignSelf='center'
            >
                <Icon name={'image'} size={18} color={"#fff"} />
            </InputIcon>
            <InputIcon
                mr="$2"
                ml="$2"
                alignSelf='center'
            >
                <Icon name={'send'} size={18} color={"#fff"} />
            </InputIcon>
        </Input>

    )
}

export default FilmCommentInput