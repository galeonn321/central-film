// ModalContext.tsx
import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  showModal: (message: string) => void;
  hideModal: () => void;
  isModalVisible: boolean; // Add this property
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC = ({ children }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModal = (message: string) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, isModalVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
