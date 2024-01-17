import React from "react";
import {
  Button,
  ButtonText,
  ModalBackdrop,
  Modal as GlueStackModal, // Rename Modal to GlueStackModal
  ModalHeader,
  ModalCloseButton,
  Pressable,
  Heading,
  ModalContent,
  Center,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
import { Text } from "@gluestack-ui/themed";

const CustomModal = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const ref = React.useRef(null);

  return (
    <Center h={300}>
      <Button onPress={() => setShowModal(true)} ref={ref}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <GlueStackModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Pressable justifyContent="center">
                <AntDesign name="close" size={25} color={"#fff"} />
              </Pressable>
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </GlueStackModal>
    </Center>
  );
};

export default CustomModal;
