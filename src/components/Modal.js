import React from 'react';
import { Button, FormControl, FormLabel, Input, Modal, ModalCloseButton, ModalBody,useDisclosure, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"

function InitialFocus() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef()
    const finalRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='blue' onClick={onOpen}>Money Transfere</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Receiver Information</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Account No.</FormLabel>
                <Input ref={initialRef} placeholder='Account No.' />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Amount</FormLabel>
                <Input placeholder='Amount' />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={()=>alert('Transaction Successful')} colorScheme='blue' mr={3}>
                Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default InitialFocus