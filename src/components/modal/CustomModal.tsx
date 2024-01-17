import React, { useState } from "react";
import {
  Button,
  ButtonText,
  ModalBackdrop,
  ModalHeader,
  Heading,
  ModalContent,
  Center,
  ModalBody,
  ModalFooter,
  Text,
  Modal,
} from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";

const CustomModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const ref = React.useRef(null);

  return (
    <Center h={300}>
      <Modal
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
          </ModalHeader>
          <ModalBody>
            <Text>Ke mira sapo ahHAHAhaHahAHAhaHA</Text>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              size="md"
              bgColor="$red900"
              mr="$3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Ok</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};

export default CustomModal;
