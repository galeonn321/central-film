// CustomModal.tsx
import React from "react";
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
import { LOG } from "../../config/logger";
import { useModal } from "./ModalContext";

interface CustomModalProps {
  message: string;
  children?: React.ReactNode; // Include children here if needed
}

const CustomModal: React.FC<CustomModalProps> = ({ message }) => {
  const { hideModal, isModalVisible } = useModal();
  const ref = React.useRef(null);

  return (
    <Center h={300}>
      <Modal
        isOpen={isModalVisible}
        onClose={() => {
          hideModal();
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader alignSelf="center">
            <Heading size="lg">error</Heading>
          </ModalHeader>
          <ModalBody>
            <Text alignSelf="center">{message}</Text>
          </ModalBody>
          <ModalFooter alignSelf="center">
            <Button
              size="md"
              bgColor="$red900"
              mr="$3"
              onPress={() => {
                hideModal();
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
