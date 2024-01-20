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
import { AntDesign } from "@expo/vector-icons";
import { LOG } from "../../config/logger";

interface CustomModalProps {
  showModal: any;
  setShowModal: any;
  message: any;
}

const CustomModal: React.FC<CustomModalProps> = ({
  showModal,
  setShowModal,
  message,
}) => {
  const ref = React.useRef(null);

  LOG.info(showModal, setShowModal, message);

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
            <Text>{message}</Text>
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
