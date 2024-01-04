import { Input, InputField, Pressable } from '@gluestack-ui/themed'
import React, { useState } from 'react'

import { EvilIcons, AntDesign } from '@expo/vector-icons';

const FilmCommentInput = () => {

    const [inputText, setInputText] = useState<string>("");


    return (
        <Input
        bgColor={"$warmGray700"}
        borderColor="#fff"
        borderWidth={0.5}
        borderRadius={"$full"}
        mx="$2"
        my="$2"
        alignItems="center"
        px={"$2"}
        
      >
        <EvilIcons name="comment" size={30} color="white" />
        <InputField
          onChangeText={(text: string) => setInputText(text)}
          value={inputText}
          color="#fff"
          placeholder="Write your review here.."
          selectionColor={"#fff"}
          multiline={true}
        />
        {inputText.length > 0 && (
          <Pressable onPress={() => setInputText("")}>
            <AntDesign name="close" size={25} color={"#fff"} />
          </Pressable>
        )}
      </Input>

    )
}

export default FilmCommentInput