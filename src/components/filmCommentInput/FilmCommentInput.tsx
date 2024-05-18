import {
  Button,
  FormControlLabelText,
  Input,
  InputField,
  Pressable,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import { EvilIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { FormControlLabel } from "@gluestack-ui/themed";
import { ButtonText } from "@gluestack-ui/themed";
import { LOG } from "../../config/logger";

const FilmCommentInput = () => {
  const [inputText, setInputText] = useState<string>("");

  return (
    <>
      <FormControlLabel>
        <FormControlLabelText>
          Add your thought about the film
        </FormControlLabelText>
      </FormControlLabel>
      <Textarea bgColor={"#fff"} borderColor="#000" mb="$2">
        <TextareaInput
          onChangeText={(text: string) => setInputText(text)}
          value={inputText}
          placeholder="comment..."
          mr={'$8'}
        />

        {inputText.length > 0 && (
          <Pressable
            onPress={() => setInputText("")}
            mr="$2"
            position="absolute"
            right={"$0"}
            top={"$1"}
          >
            <AntDesign name="closesquare" size={25} color={"#000"} />
          </Pressable>
        )}
      </Textarea>
      <Button
        size="sm"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        bgColor="#000"
      >
        <ButtonText mr='$2'>Send Comment</ButtonText>
        <FontAwesome name="send" size={12} color={"#fff"} />
      </Button>
    </>
  );
};

export default FilmCommentInput;
