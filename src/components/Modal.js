"use client"

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";


export default function SubmitPopover() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const router = useRouter();

    return (
        <>
            <Button onPress={onOpen} className="bg-blue-200 text-blue-600 p-3 font-semibold rounded-lg hover:text-white hover:bg-blue-500 transition-all">Submit</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    You sure to submit?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    No
                                </Button>
                                <Button color="primary" onPress={() => {
                                    router.push("/pages/login")
                                }}>
                                    Yes
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
